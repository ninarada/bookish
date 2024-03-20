import getWorkByISBN from "@/app/api/items/getWorkByISBN";
import styles from "./results.module.css";
import getCovers from "@/app/api/items/getCovers";

interface SearchResultsProps {
    searchInput: string;
}

const SearchResultsA: React.FC<SearchResultsProps> = async ({ searchInput }) =>{
    let result;
    let cover;
    try {
        result = await getWorkByISBN(searchInput);
        if(result !== undefined && result !== null) {
            cover =  getCovers('id', String(result.keyWork.covers[0]));
        }
        
    } catch (error) {
        console.log("Error in searchResult " + error);
    }

    return (
        <div className={styles.results}>
            <div className={styles.resultTemplate}>
                <div className={styles.imgBox}>
                    <img src={cover} alt="" className={styles.image}/>
                </div>
                <div className={styles.text}>
                    <div className={styles.title}>{result !== undefined && result !== null ? result.keyWork.title : "No results"}</div>
                    <div className={styles.authors}>
                        {result === undefined  || result === null ? "" : result.keyAuthor.map(author => <div className={styles.author} key={author.key}>{author.name}</div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResultsA;