import styles from "./results.module.css";
import getWorkByTitle from "@/app/api/items/getWorkByTitle";

interface SearchResultsProps {
    searchInput: string;
}

const SearchResultsA: React.FC<SearchResultsProps> = async ({ searchInput }) =>{
    let resultByTitle=null;

    try {
            /*
            result = await getWorkByISBN(searchInput);
            if (result !== undefined && result !== null && result.keyWork !== undefined && result.keyWork !== null) {
                cover = getCovers('id', String(result.keyWork.covers[0]));
            }
            */
    
            if(searchInput !== "") {
                resultByTitle = await getWorkByTitle(searchInput);
                //console.log("AAAAAAAA"+resultByTitle[0]);
            }
            

        
    } catch (error) {
        console.log("Error in searchResultA " + error);
    }

    return (
        <div className={styles.results}>
            {resultByTitle!=null && resultByTitle.map(i => (
                i && i.keyWork && (
                <div key={i?.keyWork?.key} className={styles.resultTemplate}>
                    <div className={styles.imgBox}>
                        <img src={`https://covers.openlibrary.org/b/id/${i?.keyWork?.covers?.[0]}-M.jpg`} alt="no" className={styles.image}/>
                    </div>
                    <div className={styles.text}>
                        <div key={i?.keyWork?.key} className={styles.title}>{i?.keyWork?.title}</div>
                        <div className={styles.authors}>
                            {i?.keyAuthor?.map((author) => (
                                <div className={styles.author} key={author.key}>
                                    {author.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                )
            ))}
        </div>
    )
}

export default SearchResultsA;