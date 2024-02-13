import styles from './work.module.css';
import getCovers from '@/app/api/items/getCovers';
import { TypeAuthor } from '@/app/types/TypeAuthor';
import Link from 'next/link';
import { TypeWork } from '@/app/types/TypeWork';
import extractKeyFromArray from '@/app/api/functions/extractKeyFromArray';

interface WorkTemplateProps {
    work: TypeWork;
    authors: TypeAuthor[];
}

export default function WorkTemplate ({work, authors}: WorkTemplateProps) {
    const cover =  getCovers('id', String(work.covers[0]));

    return (
        <>
        <Link href={`/${extractKeyFromArray(work.key)}`} className={styles.workCard}>
            <div className={styles.imgContainer}>
                <img src={cover} alt="book_cover" className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.title}>{work.title}</div>
                <div className={styles.authors}>
                    {authors.map((author) => 
                        <span key={author.name} className={styles.author}>{author.name} </span>
                    )}
                </div>
            </div>
        </Link>
        </>
    );
}