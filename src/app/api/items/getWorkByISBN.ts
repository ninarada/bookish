import { TypeBook } from "@/app/types/TypeBook";
import { TypeWork } from "@/app/types/TypeWork";
import getWork from "./getWorks";
import extractKeyFromArray from "../functions/extractKeyFromArray";
import { TypeAuthor } from "@/app/types/TypeAuthor";
import getAuthor from "./getAuthor";

export default async function getWorkByISBN(inputISBN: string) {

    if(inputISBN === '') {
        return null;
    }

    const response = await fetch(`https://openlibrary.org/isbn/${inputISBN}.json`);

    if (!response.ok) {
        console.log(`Failed to fetch work with inputISBN: ${inputISBN}. Status: ${response.status}`);
        return null;
    }

    const data = await response.json();

    const fetchedBook = data.key;
    const fetchedBook2 = extractKeyFromArray(fetchedBook);

    const fetchedWork= await getWork(fetchedBook2);

    if (fetchedWork!==null) {
        const authorKeys = fetchedWork.authors.map(i => extractKeyFromArray(i.key));                

        const authors: TypeAuthor[] = (await Promise.all(authorKeys.map(async (authorKey) => {
            try {
                return await getAuthor(authorKey);
            } catch (error) {
                console.error(`Error fetching author: ${error}`);
                return undefined; // or return a default value
            }
        }))).filter((author): author is TypeAuthor => !!author);

        const workAndAuthors: { keyWork: TypeWork; keyAuthor: TypeAuthor[]} = {
            keyWork: fetchedWork,
            keyAuthor: authors,
        }
        
        return workAndAuthors;
    }
}