import React from 'react';
import shot from '@/app/_assets/movies/shot.png';
import Image from "next/image";
import s from './SeriesItem.module.css';

const getMinutesString = (number) => {
    const lastTwoDigits = number % 100;
    const lastDigit = lastTwoDigits % 10;
    let minutesString;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        minutesString = 'минут';
    } else {
        switch (lastDigit) {
            case 1:
                minutesString = 'минута';
                break;
            case 2:
            case 3:
            case 4:
                minutesString = 'минуты';
                break;
            default:
                minutesString = 'минут';
        }
    }
    return `${number} ${minutesString}`;
}

const SeriesItem = ({seriesNumber, length}) => {
    return (
        <div className={s.item}>
            <button>
                <Image src={shot} alt={seriesNumber} className={s.img}/>
                <p className={s.white_text}>{seriesNumber} серия</p>
                <p className={s.gray_text}>{getMinutesString(length)}</p>
            </button>
        </div>
    );
};

export default SeriesItem;