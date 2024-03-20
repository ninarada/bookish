import { TypeWork } from "@/app/types/TypeWork";
import getWork from "./getWorks";
import extractKeyFromArray from "../functions/extractKeyFromArray";
import { TypeAuthor } from "@/app/types/TypeAuthor";
import getAuthor from "./getAuthor";
import getCovers from "./getCovers";

export default async function getWorkByTitle(inputTitle: string) {

    if(inputTitle === '') {
        return null;
    }

    const response = await fetch(`https://openlibrary.org/search.json?title=${inputTitle}`);

    if (!response.ok) {
        console.log(`Failed to fetch work with inputISBN: ${inputTitle}. Status: ${response.status}`);
        return null;
    }

    const data = await response.json();
    
    const fWorks = data.docs.map((i: any) => extractKeyFromArray(i.key)).slice(0,10);
    //fWorks.map((i:any) =>  console.log(i));

    const worksArrayPromise = Promise.all(fWorks.map(async (workKey: string) => {
        const fetchedWork= await getWork(workKey);

        if (fetchedWork!==null && fetchedWork!==undefined) {
            const authorKeys = fetchedWork.authors.map(i => extractKeyFromArray(i.author.key));                
            //authorKeys.map(i => console.log(i)) ;
            
            const authors: TypeAuthor[] = (await Promise.all(authorKeys.map(async (authorKey) => {
                try {
                    const a = await getAuthor(authorKey)
                    return a;
                } catch (error) {
                    console.error(`Error fetching author: ${error}`);
                    return undefined; // or return a default value
                }
            }))).filter((author): author is TypeAuthor => !!author);


            const workAndAuthors: { keyWork: TypeWork; keyAuthor: TypeAuthor[]} = {
                keyWork: fetchedWork,
                keyAuthor: authors,
                
            }
            //console.log("BBBBBBBBB"+workAndAuthors.keyCover);
            return workAndAuthors;
        }
    }));

    const worksArray = await worksArrayPromise;
    //console.log("CCCCCCCCC"+ worksArray[0].keyAuthor[0].name);
    return  worksArray;
}