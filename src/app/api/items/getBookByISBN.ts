import { TypeBook } from "@/app/types/TypeBook";

export default async function getBookByISBN(inputISBN: string) {

    const response = await fetch(`https://openlibrary.org/isbn/${inputISBN}.json`);
    const data = await response.json();

    const fetchedBook: TypeBook = {
        title: data.title,
        number_of_pages: data.number_of_pages,
        publishers: data.publishers, 
        covers: data.covers, 
        authors: data.authors, 
        isbn_13: data.isbn_13, 
        isbn_10: data.isbn_10, 
        publish_date: data.publish_date,   
    };
    
    return fetchedBook;
}