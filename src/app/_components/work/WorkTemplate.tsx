import styles from './work.module.css';
import Image from "next/image";
import getCovers from '@/app/api/items/getCovers';
import { TypeAuthor } from '@/app/types/TypeAuthor';

interface WorkTemplateProps {
    title: string;
    authors: TypeAuthor[];
    covers: number[];
}

export default function WorkTemplate ({ title, authors, covers }: WorkTemplateProps) {
    const cover =  getCovers('id', String(covers[0]));

    return (
        <>
        <div className={styles.workCard}>
            <div className={styles.imgContainer}>
                <img src={cover} alt="book_cover" className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.title}>{title}</div>
                <div className={styles.authors}>
                    {authors.map((author) => 
                        <span key={author.name} className={styles.author}>{author.name} </span>
                    )}
                </div>
            </div>
        </div>
        </>
    );
}