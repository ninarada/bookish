import { TypeWork } from '@/app/types/TypeWork';
import styles from './work.module.css';
import Image from "next/image";
import getCovers from '@/app/api/items/getCovers';
import getAuthor from '@/app/api/items/getAuthors';
import extractKeyFromArray from '@/app/api/functions/extractKeyFromArray';


export default async function WorkTemplate (work: TypeWork) {
    const coverID = work.covers[0];
    const cover =  getCovers('id', String(coverID));

    const authorKeysArray = work.authors.map(i => i.author).map(j => j.key).map((key) => extractKeyFromArray(key));

    const fetchedAuthors: Set<string> = new Set();


    const authors: string[] = [];

    for (const key of authorKeysArray) {
        if (!fetchedAuthors.has(key)) {
            try {
                fetchedAuthors.add(key);
                const author = await getAuthor(key);
                authors.push(author.name);
            } catch (error) {
                throw new Error(`Unable to fetch author.`);
            }
        }
    }

    return (
        <>
        <div className={styles.workCard}>
            <img src={cover} alt="book_cover" className={styles.image}/>
            <div className={styles.title}>{work.title}</div>
            <div className={styles.authors}>
                {authors.map((name) => 
                    <div key={name} className={styles.author}>{name} </div>
                )}
            </div>
        </div>
        </>
    );
}