import getCovers from "../api/items/getCovers";
import getBestsellers from "../api/nytimes/getBestsellers"


export default async function Profile () {
    const works = await getBestsellers('hardcover-fiction', '2023-12-05', '2023-12-20');
    console.log(works);

    return (
        <main>
            <p>This is Profile page.</p>
            <p>
                {works.map((work) => 
                    <div key={work.key}>
                        <img src={getCovers('id', String(work.covers[0]))} alt="book_cover"/>
                        <p>{work.key}</p>
                        <p>{work.title}</p>
                    </div> 
                )}
            </p>
        </main>
      )
}