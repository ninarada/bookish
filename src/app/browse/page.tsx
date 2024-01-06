import BookTemplate from "../_components/book/BookTemplate";
import getBook from "../api/items/getBook";
import getBookByISBN from "../api/items/getBookByISBN";
import getBooksBySubjectName from "../api/items/getBooksBySubjectName";
import styles from "./browse.module.css";

function extractKeyFromArray(arr: any) {
  if (Array.isArray(arr) && arr.length > 0 && typeof arr[0] === 'object' && arr[0].key) {
    return arr[0].key;
  } else {
    return null; 
  }
}

export default async function Browse () {
    
    //const book = await getBook();
    //const book2 = await getBookByISBN('9780525522133');
    //<BookTemplate {...book2} />
    //const extractedKey = extractKeyFromArray(book2.authors);

    console.log('-------------------------------------------------------------------------------------');

    const fictionWorks = await getBooksBySubjectName('fiction', '2');

    return (
        <main>
            <div className={styles.subject}>
              {fictionWorks.map(work => (
                <BookTemplate {...work} key={work.title}/>
              ))}
            </div>
        </main>
      )
}