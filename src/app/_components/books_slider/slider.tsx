"use client"

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./slider.module.css";
import { TypeWork } from "@/app/types/TypeWork";
import WorkTemplate from "../work/WorkTemplate";
import { useEffect, useState } from "react";

export default function BookSlider (works: TypeWork[]){
    
    const worksArray = Object.values(works);

    return (
        <>
        <div className={styles.slider_container}>
            <IoIosArrowBack style={{position: 'absolute', top: '50%', left: '5%', cursor: 'pointer', color: '#8f8f8f'}} size="30px"/>
            <div className={styles.books_container}>
                {Array.isArray(worksArray) && worksArray.map((work) =>
                    <WorkTemplate {...work} key={work.key}/>
                )}
            </div>
            <IoIosArrowForward style={{position: 'absolute', top: '50%', right: '5%', cursor: 'pointer', color: '#8f8f8f'}} size="30px"/>
        </div>
        </>
    );
}