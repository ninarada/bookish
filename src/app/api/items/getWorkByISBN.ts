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

    let response = null;

    try {
        response = await fetch(`https://openlibrary.org/isbn/${inputISBN}.json`);
    } catch (error) {
        response = null;
    }

    if (response?.status !== 200 || response === null) {
        //console.log(`Failed to fetch work with inputISBN: ${inputISBN}. Status: ${response.status}`);
        return null;
    }

    const data = await response.json();

    
    if (!data || Object.keys(data).length === 0) {
        // No data returned for the given ISBN
        return null;
    }

    let fetchedWork= null; 
    
    fetchedWork =await getWork(extractKeyFromArray(data.key));

    if (fetchedWork!==null && fetchedWork.authors !== undefined) {
        const authorKeys = fetchedWork.authors.map(i => extractKeyFromArray(i.key));                

        const authors: TypeAuthor[] = (await Promise.all(authorKeys.map(async (authorKey) => {
            let aut =null;
            try {
                
                aut = await getAuthor(authorKey);
                if(aut !== null) {
                    return aut;
                }
            } catch (error) {
                //console.error(`Error fetching author: ${error}`);
                if(aut !== null) {
                    return aut;
                }
            }
        }))).filter((author): author is TypeAuthor => !!author);

        const workAndAuthors: { keyWork: TypeWork; keyAuthor: TypeAuthor[]} = {
            keyWork: fetchedWork,
            keyAuthor: authors,
        }
        
        return workAndAuthors;
    }

    return null;
}