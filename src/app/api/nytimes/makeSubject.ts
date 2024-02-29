import { TypeWork } from "@/app/types/TypeWork";
import getWorkByISBN from "../items/getWorkByISBN";
import { TypeAuthor } from "@/app/types/TypeAuthor";
import extractKeyFromArray from "../functions/extractKeyFromArray";
import getAuthor from "../items/getAuthor";

const API_KEY = 'GtwIY4JArk3velUlmurrUtHpNBTJN0iB';

//example: list: hardcover-fiction, bestsellers-date: 2023-12-05, published-date:2023-12-20, offset: 0
export default async function makeSubject(list: string, bestsellers_date: string, published_date:string) {
    const baseUrl = `https://api.nytimes.com/svc/books/v3/lists.json?list=hardcover-fiction&bestsellers-date=2023-12-05&published-date=2023-12-20&api-key=${API_KEY}`;
    
    let subjectWorks = [];
    let subject: {keyWork: TypeWork, keyAuthor: TypeAuthor[]} [] = [];
    try {
        const response = await fetch(baseUrl);
        const data = await response.json();

        const fetchedISBNs = data.results.map((book: { isbns: any; }) => book.isbns);
        const firstIsbn10s = fetchedISBNs.map((isbnList: { isbn10: any; }[]) => isbnList[0]?.isbn10);

        await Promise.all(firstIsbn10s.map(async (isbn10:string) => {
            if (isbn10 !== undefined) {
                const work = await getWorkByISBN(isbn10);

                const authorKeys = work.authors.map(i => i.author?.key.split('/').pop() || '');
                const authors: TypeAuthor[] = (await Promise.all(authorKeys.map(async (authorKey) => {
                    try {
                        return await getAuthor(authorKey);
                    } catch (error) {
                        console.error(`Error fetching author: ${error}`);
                        // Handle error or return a default value if appropriate
                        return undefined; // or return a default value
                    }
                }))).filter((author): author is TypeAuthor => !!author);

                const newEntry: { keyWork: TypeWork; keyAuthor: TypeAuthor[]} = {
                    keyWork: work,
                    keyAuthor: authors,
                }

                subject.push(newEntry);
                
            }
        }));
        return subject;
        
    } catch (error) {
        console.log(error);
        throw new Error(`Unable to fetch bestseller list.`);
    }
}