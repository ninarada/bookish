import { TypeSubject } from "@/app/types/TypeSubject";
import getWork from "./getWorks";
import getBook from "./getBook";
import { TypeBook } from "@/app/types/TypeBook";

export default async function getBooksBySubjectName(input: string, limit: string) {

    const response = await fetch(`https://openlibrary.org/subjects/${input}.json?limit=${limit}&details=false`);
    const data = await response.json();

    const fetchedSubject: TypeSubject = {
        key: data.key,
        name: data.name,
        subject_type: data.subject_type,
        work_count: data.work_count,
        works: data.works, 
    };

    const fetchedWorksKeys = fetchedSubject.works?.map((work) => work.key.split('/').pop());

    const fetchedWorks: TypeBook[] = fetchedWorksKeys ?  await Promise.all(fetchedWorksKeys.map(async(i) => {
            return await getBook(i!)
        })
    ) : [];

    //console.log(fetchedWorks);
    
    return fetchedWorks;
}