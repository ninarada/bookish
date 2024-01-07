import { TypeBook } from '@/app/types/TypeBook';
import styles from './book.module.css';
import Image from "next/image";
import getCovers from '@/app/api/items/getCovers';

export default function BookTemplate (book: TypeBook) {
    return (
        <>
        <div className={styles.bookCard}>
            <img src="" alt="book_cover" className={styles.image}/>
            <div className={styles.title}>{book.title}</div>
        </div>
        </>
    )
}