import getWorkByISBN from "@/app/api/items/getWorkByISBN";
import styles from "./results.module.css";
import getCovers from "@/app/api/items/getCovers";
import getWorkByTitle from "@/app/api/items/getWorkByTitle";

interface SearchResultsProps {
    searchInput: string;
}

const SearchResultsA: React.FC<SearchResultsProps> = async ({ searchInput }) =>{
    let result;
    let cover;
    let resultByTitle;

    try {
        result = await getWorkByISBN(searchInput);
        if(result !== undefined && result !== null) {
            cover =  getCovers('id', String(result.keyWork.covers[0]));
        }

        if (result === null) {
            resultByTitle = await getWorkByTitle(searchInput);
            //console.log("AAAAAAAA"+resultByTitle[0]);
        }
        
    } catch (error) {
        console.log("Error in searchResultA " + error);
    }

    return (
        <div className={styles.results}>
            {resultByTitle?.map(i => (
                <div key={i.keyWork.key} className={styles.resultTemplate}>
                    <div className={styles.imgBox}>
                        <img src={`https://covers.openlibrary.org/b/id/${i.keyWork?.covers?.[0]}-M.jpg`} alt="no" className={styles.image}/>
                    </div>
                    <div className={styles.text}>
                        <div key={i.keyWork.key} className={styles.title}>{i.keyWork.title}</div>
                        <div className={styles.authors}>
                            {i.keyAuthor?.map(author => <div className={styles.author} key={author.key}>{author.name}</div>)}
                        </div>
                    </div>
                </div>
            ))}
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