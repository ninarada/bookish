import BookTemplate from "../_components/book/BookTemplate";
import getBook from "../api/items/getBook";
import getBookByISBN from "../api/items/getBookByISBN";

export default async function Shop () {
    const book = await getBook();
    const book2 = await getBookByISBN('9780525522133');

    return (
        <main>
            <p>This is Shop page.</p>
            <BookTemplate {...book2} />

        </main>
      )
}