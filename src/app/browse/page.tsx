import BookTemplate from "../_components/book/BookTemplate";
import getBook from "../api/items/getBook";
import getBookByISBN from "../api/items/getBookByISBN";

function extractKeyFromArray(arr: any) {
        if (Array.isArray(arr) && arr.length > 0 && typeof arr[0] === 'object' && arr[0].key) {
          return arr[0].key;
        } else {
          return null; // or any default value or indication of failure
        }
}

export default async function Shop () {
    
    const book = await getBook();
    const book2 = await getBookByISBN('9780525522133');
    const extractedKey = extractKeyFromArray(book2.authors);

    console.log(book2.authors);
    console.log(extractedKey);

    return (
        <main>
            <p>This is Browse page.</p>
            <BookTemplate {...book2} />
            <div>isbn10={book2.isbn_10},isbn13={book2.isbn_13}</div>
            <div>{extractedKey}</div>
        </main>
      )
}