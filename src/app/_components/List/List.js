'use client'
import React, {useRef} from 'react';
import left from '@/app/_assets/chevron-left.svg';
import right from '@/app/_assets/chevron-right.svg';
import Image from "next/image";
import s from './List.module.css';

const List = ({title, children, gap}) => {
    const scrollableContainerRef = useRef(null);
    const scroll = 300

    const scrollLeft = () => {
        if (scrollableContainerRef.current) {
            scrollableContainerRef.current.scrollTo({
                left: scrollableContainerRef.current.scrollLeft - scroll,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (scrollableContainerRef.current) {
            scrollableContainerRef.current.scrollTo({
                left: scrollableContainerRef.current.scrollLeft + scroll,
                behavior: 'smooth',
            });
        }
    };
    return (
        <div>
            {title && <h2 className={s.title}>{title}</h2>}
            <div className={s.scrollable_block}>
                <button className={s.arrow} onClick={scrollLeft}>
                    <Image src={left} alt='' className={s.icon}/>
                </button>
                <div className={s.scrollable_container} style={{gap: gap}}
                     ref={scrollableContainerRef}>
                    {children}
                </div>
                <button className={s.arrow} onClick={scrollRight} style={{right: 0, left: 'auto'}}>
                    <Image src={right} alt='' className={s.icon}/>
                </button>
            </div>
        </div>
    );
};

export default List;