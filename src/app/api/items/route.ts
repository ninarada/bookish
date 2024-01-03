import { NextResponse } from 'next/server'

export async function getItem() {
    const res = await fetch('https://fakestoreapi.com/products/1');

    const data = await res.json();

    return data;
}