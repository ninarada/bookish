import BookTemplate from "../_components/book/BookTemplate";
import { TypeBook } from "../types/Book";

const baseUrl = 'https://openlibrary.org/works/OL17889978W.json';

export default async function Shop () {

    const newBook: TypeBook = {
        title: "The New Book",
        author: "John Doe",
        cover: "https://images.unsplash.com/photo-1599744249842-ada1047fd47e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }

    const res = await fetch (baseUrl);
    const data = await res.json();

    const fetchedBook: TypeBook = {
        title: data.title,
    };

    return (
        <main>
            <p>This is Shop page.</p>
            <BookTemplate {...newBook}></BookTemplate>
            <BookTemplate {...fetchedBook}></BookTemplate>
        </main>
      )
}