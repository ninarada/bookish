import BookSlider from "../_components/books_slider/slider";
import { TypeWork } from "../types/TypeWork";
import { TypeAuthor } from "../types/TypeAuthor";
import styles from "./browse.module.css";
import getSubject from "../api/functions/getSubject";
import Link from "next/link";

export default async function Browse () {
    const fiction: {keyWork: TypeWork, keyAuthor: TypeAuthor[]} [] = await getSubject('fiction', '10');
    const romance: {keyWork: TypeWork, keyAuthor: TypeAuthor[]} [] = await getSubject('romance', '10');

    return (
        <main>

            <div className={styles.container}>
              <Link href={`browse/fiction`}><h2 className={styles.header2}>Fiction</h2></Link>
              <BookSlider subject={fiction}/>
              <Link href={`browse/fiction`} className={styles.showMore}>show more</Link>
              <div className={styles.line}></div>
              <Link href={`browse/romance`}><h2 className={styles.header2}>Romance</h2></Link>
              <BookSlider subject={romance}/>
              <Link href={`browse/romance`} className={styles.showMore}>show more</Link>
              <div className={styles.line}></div>
            </div>
            
        </main>
      )
}