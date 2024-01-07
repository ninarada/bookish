import { TypeBook } from "@/app/types/TypeBook";

export default async function getBook(OLID: string) {

    const response = await fetch(`https://openlibrary.org/books/${OLID}.json`);
    const data = await response.json();

    const fetchedBook: TypeBook = {
        description: data.description,
        title: data.title,
        authors: data.authors,
        covers: data.covers,
    };
    
    return fetchedBook;
}