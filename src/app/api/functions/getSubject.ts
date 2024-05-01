import { TypeAuthor } from "@/app/types/TypeAuthor";
import { TypeWork } from "@/app/types/TypeWork";
import getBooksBySubjectName from "../items/getBooksBySubjectName";
import getAuthor from "../items/getAuthor";
import extractKeyFromArray from "./extractKeyFromArray";

export default async function getSubject (subjectName:string, limit:string) {

    let fictionWorks = [];
    let fiction: {keyWork: TypeWork, keyAuthor: TypeAuthor[]} [] = [];

    try {
        fictionWorks = await getBooksBySubjectName(subjectName, limit);
  
        if(fictionWorks) {
  
          await Promise.all( fictionWorks.flatMap(async (work) => {
            const authorKeys = work.authors.map(i => extractKeyFromArray(i.author.key));
  
            const authors = await Promise.all(authorKeys.map(async (authorKey) => {
              return await getAuthor(authorKey);
            })) 
          
            const filteredAuthors: TypeAuthor[] = authors.filter((author) => author !== null) as TypeAuthor[];
  
            const newEntry: { keyWork: TypeWork; keyAuthor: TypeAuthor[]} = {
              keyWork: work,
              keyAuthor: filteredAuthors,
            }
            fiction.push(newEntry);
          }));
        }

        return fiction;
        
      } catch (error) {
        console.log(error);
      }
}