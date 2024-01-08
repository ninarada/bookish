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
    
    return (
        <>
        <div className={styles.slider_container}>
            <IoIosArrowBack style={{position: 'absolute', top: '50%', left: '5%', cursor: 'pointer', color: '#8f8f8f'}} size="30px"/>
            <div className={styles.books_container}>
                {subject.map((pair) => {

                    return <WorkTemplate title={pair.keyWork.title} authors={pair.keyAuthor} covers={pair.keyWork.covers} key={pair.keyWork.title}/>
                })}
            </div>
            <IoIosArrowForward style={{position: 'absolute', top: '50%', right: '5%', cursor: 'pointer', color: '#8f8f8f'}} size="30px"/>
        </div>
        </>
    );
}