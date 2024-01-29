import React from 'react';
import Image from "next/image";
import s from './Card.module.css';

const Card = ({item, isSmall = false}) => {
    return (
        <a href={'/series'} className={!isSmall ? s.card : s.small_card}>
            <div className={s.img_block}>
                <Image src={item.img} alt={item.name} className={s.img}/>
                <div className={s.rating}>{item.rating}</div>
            </div>
            <p>{item.name}</p>
        </a>
    );
};

export default Card;