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
    const authorsArray = await Promise.all(authorKeysArray.map( async (key) => {
        const author = await getAuthor(key);
        return author;
    }));
    const authorsNamesArray = authorsArray.map((author) => author?.name);

    return (
        <>
        <div className={styles.workCard}>
            <img src={cover} alt="book_cover" className={styles.image}/>
            <div className={styles.title}>{work.title}</div>
            <div className={styles.authors}>
                {authorsNamesArray.map((name) => 
                    <span key={name} className={styles.author}>{name} </span>
                )}
            </div>
        </div>
        </>
    );
}