//NE TRIBA, mos obrisat

import { NextResponse } from 'next/server'

export async function getItem() {
    //const res = await fetch('https://gutendex.com/books/1/');
    const res = await fetch('https://openlibrary.org/works/OL17889978W.json');

    const data = await res.json();
    console.log(data);
    return data;
}