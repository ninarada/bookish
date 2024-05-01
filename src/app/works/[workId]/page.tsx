import { TypeWork } from "@/app/types/TypeWork";
import styles from "./bookPage.module.css"
import getCovers from "@/app/api/items/getCovers";
import getWork from "@/app/api/items/getWorks";
import { TypeAuthor } from "@/app/types/TypeAuthor";
import getAuthor from "@/app/api/items/getAuthor";
import extractKeyFromArray from "@/app/api/functions/extractKeyFromArray";
import Link from "next/link";
import RatingStars from "@/app/_components/ratingStars/RatingStars";
import getSubject from "@/app/api/functions/getSubject";
import BookSlider from "@/app/_components/books_slider/slider";

function getRandomElementFromArray(array: string | any[]) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function convertToSnakeCase(text: string) {
    return text.toLowerCase().replace(/\s+/g, '_');
}

interface Params {
    workId: string;
}

export default async function BookPage({ params }: { params: Params }) {
    const work = await getWork(params.workId); 

    if (work === null) {
        return <div>Error: Book not found</div>;
    }

    const authorKeys = work?.authors.map(i => {
        if(i.key!=undefined) {
            return extractKeyFromArray(i.key)
        } else {
            return ''
        } 
    });

    const nonfilteredAuthors = work?.authors && await Promise.all(authorKeys.map(async (authorKey) => {
        return await getAuthor(authorKey);
    })) 

    const authors: TypeAuthor[] = nonfilteredAuthors.filter((author) => author !== null) as TypeAuthor[];

    const cover =  getCovers('id', String(work.covers[0]));

    const subjectSuggestion = work?.subjects || '';

    const randomElement = getRandomElementFromArray(subjectSuggestion);
    
    let subjectSlider;

    if(randomElement != '' && randomElement != undefined) {
        subjectSlider = await getSubject(convertToSnakeCase(randomElement), '10');
    }


    return(
        <div className={styles.mainBox}>
            <div className={styles.workBox}>
                <div className={styles.leftSide}>
                    <img src={cover} alt="book_cover" className={styles.image}/>
                    <Link href="/" className={styles.btn}>Want to read</Link>
                    <Link href="/" className={styles.btn}>Add to Favorites</Link>
                    <RatingStars />
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.textContainer}>
                        <div className={styles.title}>{work.title}</div>
                        <div className={styles.authors}>
                            {authors.map((author) => 
                                <span key={author.key} className={styles.author}>{author.name}</span>
                            )}
                        </div>
                        <div className={styles.description}>
                            {work.description}
                        </div>
                        {work.pagination && (<div className={styles.info}>
                            Number of pages: {work.pagination}
                        </div>)}
                        {work.publish_date && (<div className={styles.info}>
                            Publishing date: {work.publish_date}
                        </div>)}
                    </div>
                </div>
                
                
            </div>
            
            <div className={styles.suggestionsBox}>
                {subjectSlider != undefined && <BookSlider subject={subjectSlider}/>}
            </div>
        </div>
    );
}