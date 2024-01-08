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
            <img src={cover} alt="book_cover" className={styles.image}/>
            <div className={styles.title}>{title}</div>
            <div className={styles.authors}>
                {authors.map((author) => 
                    <div key={author.name} className={styles.author}>{author.name} </div>
                )}
            </div>
        </div>
        </>
    );
}