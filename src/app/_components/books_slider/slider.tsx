"use client"

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./slider.module.css";
import { TypeWork } from "@/app/types/TypeWork";
import WorkTemplate from "../work/WorkTemplate";
import { useEffect, useState } from "react";
import { TypeAuthor } from "@/app/types/TypeAuthor";

interface BookSliderProps {
    subject: {keyWork: TypeWork, keyAuthor: TypeAuthor[]}[];
}

export default function BookSlider ({subject}: BookSliderProps){
    const [currentBooks, setCurrentBooks] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const subjectLenght = subject.length;

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); 
        window.addEventListener("resize", handleResize); 

        return () => window.removeEventListener("resize", handleResize); 
    }, []);

    const nextBook = () => {
        if (currentBooks < subjectLenght - (isMobile ? 0 : 5)) {
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
                    color: currentBooks===0 ? '#9E5256' : '#B3696D'
                }} 
                size="30px"
            />
            <div className={styles.books_container}>
                {subject.slice(currentBooks, currentBooks + (isMobile ? 1 : 5)).map((pair) => {
                    return <WorkTemplate work={pair.keyWork} authors={pair.keyAuthor} key={pair.keyWork.key}/>
                })}
            </div>
            <IoIosArrowForward onClick={() => nextBook()} 
                style={{
                    position: 'absolute', 
                    top: '40%', 
                    right: '5%', 
                    cursor: currentBooks===subjectLenght - (isMobile ? 1 : 5) ? 'default' : 'pointer', 
                    color: currentBooks===subjectLenght - (isMobile ? 1 : 5) ? '#9E5256' : '#B3696D'
                }} 
                size="30px"
            />
        </div>
        </>
    );
}