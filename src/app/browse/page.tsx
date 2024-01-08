import getBooksBySubjectName from "../api/items/getBooksBySubjectName";
import getAuthor from "../api/items/getAuthors";
import extractKeyFromArray from "../api/functions/extractKeyFromArray";
import BookSlider from "../_components/books_slider/slider";
import { TypeWork } from "../types/TypeWork";
import { TypeAuthor } from "../types/TypeAuthor";
import styles from "./browse.module.css";

export default async function Browse () {
    let fictionWorks = [];
    let fiction: {keyWork: TypeWork, keyAuthor: TypeAuthor[]} [] = [];

    try {
      fictionWorks = await getBooksBySubjectName('fiction', '6');

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
      
    } catch (error) {
      throw new Error(`Error.`);
    }
    
    //<BookSlider {...fictionWorks}/>

    return (
        <main>

            <div>
              <h2>Fiction</h2>
              <BookSlider subject={fiction}/>
            </div>
            
        </main>
      )
}