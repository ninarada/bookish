import { TypeSubject } from "@/app/types/TypeSubject";
import getWork from "./getWorks";
import { TypeWork } from "@/app/types/TypeWork";

export default async function getBooksBySubjectName(input: string, limit: string): Promise<TypeWork[]> {
    try {
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

        if (fetchedWorksKeys === undefined) {
            return [];
        }

        const fetchedChecker: Set<string> = new Set();

        const fetchedWorks = await Promise.all(fetchedWorksKeys.map(async (key) => {
            if (key !== undefined) {
                if (fetchedChecker.has(key)) {
                    return undefined; // Instead of []
                } else {
                    fetchedChecker.add(key);
                    return await getWork(key);
                }
            }
        }));

        const filteredFetchedWorks = fetchedWorks.filter(work => work !== undefined) as TypeWork[];

        return filteredFetchedWorks;
  
    } catch(error) {
        throw new Error(`Unable to fetch subject with input: ${input}`);
    }
    
}