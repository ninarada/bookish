import BookSlider from "../_components/books_slider/slider";
import { TypeWork } from "../types/TypeWork";
import { TypeAuthor } from "../types/TypeAuthor";
import styles from "./browse.module.css";
import getSubject from "../api/functions/getSubject";
import Link from "next/link";
import makeSubject from "../api/nytimes/makeSubject";

export default async function Browse () {
    const fiction = await getSubject('fiction', '10');
    const romance = await getSubject('romance', '10');
    const bestsellers: {keyWork: TypeWork, keyAuthor: TypeAuthor[]} [] =  await makeSubject('hardcover-fiction', '2023-12-05', '2023-12-20');

    return (
        <main>

            <div className={styles.container}>
              <h2 className={styles.header2}>Bestsellers</h2>
              <BookSlider subject={bestsellers}/>
              <Link href={`browse/bestsellers`} className={styles.showMore}>show more</Link>
              <div className={styles.line}></div>

              <Link href={`browse/fiction`}><h2 className={styles.header2}>Fiction</h2></Link>
              {fiction!=undefined && <BookSlider subject={fiction}/>} 
              <Link href={`browse/fiction`} className={styles.showMore}>show more</Link>
              <div className={styles.line}></div>

              <Link href={`browse/romance`}><h2 className={styles.header2}>Romance</h2></Link>
              {romance!=undefined && <BookSlider subject={romance}/>} 
              <Link href={`browse/romance`} className={styles.showMore}>show more</Link>
              <div className={styles.line}></div>

            </div>
            
        </main>
      )
}