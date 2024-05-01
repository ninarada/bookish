import Image from 'next/image';
import styles from "./home.module.css";
import SearchBar from './_components/search_bar/search-bar';
import BookSlider from './_components/books_slider/slider';
import Link from 'next/link';
import { TypeWork } from './types/TypeWork';
import { TypeAuthor } from './types/TypeAuthor';
import makeSubject from './api/nytimes/makeSubject';

export default async function Home() {
  const bestsellers: {keyWork: TypeWork, keyAuthor: TypeAuthor[]} [] =  await makeSubject('hardcover-fiction', '2023-12-05', '2023-12-20');
  //bestsellers.map(i => console.log(i))
  
  return (
    <>
    <main>
      <div className={styles.frame1}>
        <div className={styles.container1}>
          <h1 className={styles.logo}>bookish</h1>
          <SearchBar />
        </div>
      </div>

      <div className={styles.hero_bestsellers}>
        <h2 className={styles.header2}>Bestsellers</h2>
        <BookSlider subject={bestsellers}/>
        <Link href={`browse/bestsellers`} className={styles.showMore}>show more</Link>
      </div>

      <div className={styles.frame2}>
        <div className={styles.feature}>
          <div className={styles.icon}>
            <div className={styles.centeredImage}>
              <Image src="search.svg" alt="Icon" width={100} height={100} />
            </div>
          </div>
          <h2 className={styles.title}>Discover</h2>
          <p className={styles.text}>Explore a diverse library of books across genres and find hidden gems.</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.icon}>
            <div className={styles.centeredImage}>
              <Image src="note.svg" alt="Icon" width={100} height={100} />
            </div>
          </div>
          <h2 className={styles.title}>Track</h2>
          <p className={styles.text}>Set reading goals, track your progress, and organize your reading list efficiently.</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.icon}>
            <div className={styles.centeredImage}>
              <Image src="users.svg" alt="Icon" width={100} height={100} />
            </div>
          </div>
          <h2 className={styles.title}>Connect</h2>
          <p className={styles.text}>Share your thoughts, recommendations, and connect with like-minded readers.</p>
        </div>
      </div>
    </main>
    </>
    
  )
}
