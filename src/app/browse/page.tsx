import BookSlider from "../_components/books_slider/slider";
import { TypeWork } from "../types/TypeWork";
import { TypeAuthor } from "../types/TypeAuthor";
import styles from "./browse.module.css";
import getSubject from "../api/functions/getSubject";

export default async function Browse () {
    const fiction: {keyWork: TypeWork, keyAuthor: TypeAuthor[]} [] = await getSubject('fiction', '10');
    
    const romance: {keyWork: TypeWork, keyAuthor: TypeAuthor[]} [] = await getSubject('romance', '10');


    return (
        <main>

            <div className={styles.container}>
              <h2 className={styles.header2}>Fiction</h2>
              <BookSlider subject={fiction}/>
              <div className={styles.line}></div>
              <h2 className={styles.header2}>Romance</h2>
              <BookSlider subject={romance}/>
              <div className={styles.line}></div>
            </div>
            
        </main>
      )
}