import { TypeBook } from "@/app/types/TypeBook";

const baseUrl = 'https://openlibrary.org/books/OL17889978W.json';

export default async function getBook() {

    const response = await fetch(baseUrl);
    const data = await response.json();

    const fetchedBook: TypeBook = {
        description: data.description,
        title: data.title,
    };
    
    return fetchedBook;
}