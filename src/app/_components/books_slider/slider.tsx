"use client"

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./slider.module.css";
import { TypeWork } from "@/app/types/TypeWork";
import WorkTemplate from "../work/WorkTemplate";
import { useState } from "react";
import { TypeAuthor } from "@/app/types/TypeAuthor";

interface BookSliderProps {
    subject: {keyWork: TypeWork, keyAuthor: TypeAuthor[]}[];
}

export default function BookSlider ({subject}: BookSliderProps){
    const [currentBooks, setCurrentBooks] = useState(0);

    const nextBook = () => {
        if (currentBooks < 5) {
            setCurrentBooks(currentBooks+1);
        }
    }

    const prevBook = () => {
        if (currentBooks > 0) {
            setCurrentBooks(currentBooks-1);
        }
    }
    
    return (
        <>
        <div className={styles.slider_container}>
            <IoIosArrowBack onClick={() => prevBook()} 
                style={{
                    position: 'absolute', 
                    top: '40%', 
                    left: '5%', 
                    cursor: currentBooks===0 ? 'default' : 'pointer', 
                    color: currentBooks===0 ? '#8f8f8f' : '#6f6f6f'
                }} 
                size="30px"
            />
            <div className={styles.books_container}>
                {subject.slice(currentBooks, currentBooks+5).map((pair) => {
                    return <WorkTemplate work={pair.keyWork} authors={pair.keyAuthor} key={pair.keyWork.key}/>
                })}
            </div>
            <IoIosArrowForward onClick={() => nextBook()} 
                style={{
                    position: 'absolute', 
                    top: '40%', 
                    right: '5%', 
                    cursor: currentBooks===5 ? 'default' : 'pointer', 
                    color: currentBooks===5 ? '#8f8f8f' : '#6f6f6f'
                }} 
                size="30px"
            />
        </div>
        </>
    );
}