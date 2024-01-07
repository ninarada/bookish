
import getAuthor from "../api/items/getAuthors";
import getBooksBySubjectName from "../api/items/getBooksBySubjectName";
import getCovers from "../api/items/getCovers";
import { TypeAuthor } from "../types/TypeAuthor";
import styles from "./browse.module.css";
import WorkTemplate from "../_components/work/WorkTemplate";
import getWork from "../api/items/getWorks";
import BookSlider from "../_components/books_slider/slider";

function extractKeyFromArray(arr: any) {
  if (Array.isArray(arr) && arr.length > 0 && typeof arr[0] === 'object' && arr[0].key) {
    return arr[0].key;
  } else {
    return null; 
  }
}

function extractedOLID (authorData: TypeAuthor | null){
  if (authorData == null){
    return null;
  }
  const keyParts = authorData.key.split('/');
  return keyParts.length > 1 ? keyParts.pop() : undefined;
}

export default async function Browse () {
    
    /*const book = await getBook();
    const book2 = await getBookByISBN('9780525522133');
    <BookTemplate {...book2} />
    const extractedKey = extractKeyFromArray(book2.authors);

    const fictionWorks = await getBooksBySubjectName('fiction', '2');

    const imgURL = getCovers('isbn', '0385472579', 'M');
    const fetchA = await getAuthor('OL23919A');
    
    const work1 = await getWork('OL45804W');
    
    {fictionWorks.map(work => (
      <BookTemplate {...work} key={work.title}/>
    ))}
    */ 

    //console.log('-------------------------------------------------------------------------------------');

    //const work1 = await getWork('OL45804W');
    //<WorkTemplate {...work1} key={work1.key}/>

    const fiction = await getBooksBySubjectName('fiction', '6');

    return (
        <main>

            <div>
              <h2>Fiction</h2>
              <BookSlider {...fiction}/>
            </div>
            
        </main>
      )
}