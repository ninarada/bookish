import { TypeWork } from "@/app/types/TypeWork";
import getWork from "./getWorks";
import extractKeyFromArray from "../functions/extractKeyFromArray";
import { TypeAuthor } from "@/app/types/TypeAuthor";
import getAuthor from "./getAuthor";

//mozes izbrisat ovaj file
export default async function getWorkByTitle(inputTitle: string, optional?: number) {

    if(inputTitle === '') {
        return null;
    }

    const response = await fetch(`https://openlibrary.org/search.json?q=${inputTitle}&limit=9`);

    if (!response.ok) {
        console.log(`Failed to fetch work with inputISBN: ${inputTitle}. Status: ${response.status}`);
        return null;
    }

    const data = await response.json();
    
    const fWorks = data.docs.length > 10 ? 
               data.docs.map((i: any) => extractKeyFromArray(i.key)).slice(0, 10) :
               data.docs.map((i: any) => extractKeyFromArray(i.key));

    if (fWorks.length === 0) {
            // Handle the scenario where no works are found
        return [];
    }

    const worksArrayPromise = Promise.all(fWorks.map(async (workKey: string) => {
        const fetchedWork= await getWork(workKey, 1);

        if (fetchedWork!==null && fetchedWork!==undefined && fetchedWork.authors !== undefined) {
            const authorKeys = fetchedWork.authors.map(i => extractKeyFromArray(i.author.key));                
            //authorKeys.map(i => console.log(i)) ;
            
            const authors: TypeAuthor[] = (await Promise.all(authorKeys.map(async (authorKey) => {
                try {
                    const a = await getAuthor(authorKey)
                    if(a !== null){
                        return a;
                    }
                    
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