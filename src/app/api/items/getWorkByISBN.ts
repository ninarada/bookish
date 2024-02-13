import { TypeBook } from "@/app/types/TypeBook";
import { TypeWork } from "@/app/types/TypeWork";
import getWork from "./getWorks";
import extractKeyFromArray from "../functions/extractKeyFromArray";

export default async function getWorkByISBN(inputISBN: string) {

    const response = await fetch(`https://openlibrary.org/isbn/${inputISBN}.json`);
    const data = await response.json();

    const fetchedBook: TypeBook = {
        key: data.key, 
        title: data.title,
        isbn_13: data.isbn_13, 
        isbn_10: data.isbn_10, 
    };

    const fetchedWork: TypeWork = await getWork(extractKeyFromArray(fetchedBook.key));
    
    return fetchedWork;
}