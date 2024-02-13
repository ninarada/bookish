import { TypeWork } from "@/app/types/TypeWork";
import getWorkByISBN from "../items/getWorkByISBN";

const API_KEY = 'GtwIY4JArk3velUlmurrUtHpNBTJN0iB';

//example: list: hardcover-fiction, bestsellers-date: 2023-12-05, published-date:2023-12-20, offset: 0
export default async function getBestsellers (list: string, bestsellers_date: string, published_date:string): Promise<TypeWork[]>{
    const baseUrl = `https://api.nytimes.com/svc/books/v3/lists.json?list=hardcover-fiction&bestsellers-date=2023-12-05&published-date=2023-12-20&api-key=${API_KEY}`

    try {
        const response = await fetch(baseUrl);
        const data = await response.json();

        const fetchedISBNs = data.results.map((book: { isbns: any; }) => book.isbns);
        const firstIsbn10s = fetchedISBNs.map((isbnList: { isbn10: any; }[]) => isbnList[0]?.isbn10);

        const works = await Promise.all(firstIsbn10s.map(async (isbn10:string) => {
            if (isbn10 !== undefined) {
                return await getWorkByISBN(isbn10);
            }
        }));

        return works;
    } catch (error) {
        throw new Error(`Unable to fetch bestseller list.`);
    }
}