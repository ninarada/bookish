import { TypeAuthor } from "@/app/types/TypeAuthor";

export default async function getAuthor (olid: string){
    let response = null;

    try {
        response = await fetch(`https://openlibrary.org/authors/${olid}.json`);    
    } 
    catch (error){
        response = null
    }

    if(response?.status !== 200 || response === null){
        console.log(`No author with ${olid} OLID.`);
        return null;
    }

    const data = await response.json();

    
    if (!data || Object.keys(data).length === 0) {
        // No data returned for the given ISBN
        return null;
    }

    const fetchedAuthor: TypeAuthor = {
        name: data.name,
        key: data.key,
    }

    return fetchedAuthor;
}