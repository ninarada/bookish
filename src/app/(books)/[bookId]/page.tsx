import styles from "./bookPage.module.css"

interface Params {
    bookId: string;
}

export default function BookPage({params}: {params: Params}) {
    return(
        <main>
            <div className={styles.image}></div>
        </main>
    );
}