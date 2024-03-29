import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from "next/navigation";
import getWorkByTitle from "@/app/api/items/getWorkByTitle";
import styles from "./results.module.css";
import Link from "next/link";
import extractKeyFromArray from "@/app/api/functions/extractKeyFromArray";

interface SearchResult {
    keyWork: {
        key: string;
        covers: string[];
        title: string;
    };
    keyAuthor: {
        key: string;
        name: string;
    }[];
}

interface SearchResultsProps {
    searchInput: string;
}

const SearchResultsB: React.FC<SearchResultsProps> = ({ searchInput }) =>{
    const [resultByTitle, setResultByTitle] = useState<SearchResult[]>([]);
    const router = useRouter();
    const searchParams = useSearchParams().get('search');

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (searchInput !== "") {
                    const result = await getWorkByTitle(searchInput);
                    setResultByTitle(result as SearchResult[]);
                } else {
                    setResultByTitle([]); 
                }
            } catch (error) {
                console.log("Error in searchResultA " + error);
            }
        };

        fetchData();

        return () => {
        };
    }, [searchInput]); 

    const handleClick = (key: string) => {
        router.push(`/details/${key}`);
    };

    return (
        <div className={styles.results}>
            {resultByTitle.map(i => (
                i && i.keyWork && (
                    <Link key={i.keyWork.key} 
                            href={`/works/${extractKeyFromArray(i.keyWork.key)}`}
                            className={styles.resultTemplate} 
                            onClick={() => handleClick(i.keyWork.key)}>
                        <div className={styles.imgBox}>
                            <img src={`https://covers.openlibrary.org/b/id/${i.keyWork.covers?.[0]}-M.jpg`} alt="no" className={styles.image}/>
                        </div>
                        <div className={styles.text}>
                            <div key={i.keyWork.key} className={styles.title}>{i.keyWork.title}</div>
                            <div className={styles.authors}>
                                {i.keyAuthor.map((author) => (
                                    <div className={styles.author} key={author.key}>
                                        {author.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Link>
                )
            ))}
        </div>
    );
};

export default SearchResultsB;
