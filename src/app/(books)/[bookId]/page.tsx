import { TypeWork } from "@/app/types/TypeWork";
import styles from "./bookPage.module.css"
import getCovers from "@/app/api/items/getCovers";
import getWork from "@/app/api/items/getWorks";
import { TypeAuthor } from "@/app/types/TypeAuthor";
import getAuthor from "@/app/api/items/getAuthor";
import extractKeyFromArray from "@/app/api/functions/extractKeyFromArray";

interface Params {
    bookId: string;
}

export default async function BookPage({ params }: { params: Params }) {
    const work: TypeWork = await getWork(params.bookId); 
    const authorKeys = work.authors.map(i => extractKeyFromArray(i.author.key));
    const authors: TypeAuthor[] = await Promise.all(authorKeys.map(async (authorKey) => {
        return await getAuthor(authorKey);
    })) 
    const cover =  getCovers('id', String(work.covers[0]));

    return(
        <main>
            <div className={styles.imgContainer}>
                <img src={cover} alt="book_cover" className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.title}>{work.title}</div>
                <div className={styles.authors}>
                    {authors.map((author) => 
                        <span key={author.key} className={styles.author}>{author.name}</span>
                    )}
                </div>
            </div>
        </main>
    );
}