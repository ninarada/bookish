import { TypeAuthor } from "@/app/types/TypeAuthor";
import { TypeWork } from "@/app/types/TypeWork";
import getBooksBySubjectName from "../items/getBooksBySubjectName";
import getAuthor from "../items/getAuthors";
import extractKeyFromArray from "./extractKeyFromArray";

export default async function getSubject (subjectName:string, limit:string) {

    let fictionWorks = [];
    let fiction: {keyWork: TypeWork, keyAuthor: TypeAuthor[]} [] = [];

    try {
        fictionWorks = await getBooksBySubjectName(subjectName, limit);
  
        if(fictionWorks) {
  
          await Promise.all( fictionWorks.flatMap(async (work) => {
            const authorKeys = work.authors.map(i => extractKeyFromArray(i.author.key));
  
            const authors: TypeAuthor[] = await Promise.all(authorKeys.map(async (authorKey) => {
              return await getAuthor(authorKey);
            })) 
  
            const newEntry: { keyWork: TypeWork; keyAuthor: TypeAuthor[]} = {
              keyWork: work,
              keyAuthor: authors,
            }
            fiction.push(newEntry);
          }));
        }

        return fiction;
        
      } catch (error) {
        throw new Error(`Error.`);
      }
}