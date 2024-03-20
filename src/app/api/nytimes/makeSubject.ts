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
                const workAndAuthors = await getWorkByISBN(isbn10);
                
                subject.push(workAndAuthors);
                
            }
        }));
        //subject.map(i => console.log(i))
        return subject;
        
    } catch (error) {
        console.log(error);
        throw new Error(`Unable to fetch bestseller list.`);
    }
}