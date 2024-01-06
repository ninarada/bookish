import { TypeBook } from '@/app/types/TypeBook';
import styles from './book.module.css';
import Image from "next/image";

export default function BookTemplate (book: TypeBook) {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.title}>{book.title}</div>
        </div>
        </>
    )
}