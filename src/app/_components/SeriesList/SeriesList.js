'use client'
import React, {useMemo, useState} from 'react';
import List from "@/app/_components/List/List";
import SeriesItem from "@/app/_components/SeriesItem/SeriesItem";
import s from './SeriesList.module.css';

const arr = []
for (let i = 0; i < 10; i++) {
    arr.push({length: 40 + i, number: i+1})
}

const seasons = [1, 2, 3]
const SeriesList = () => {
    const [activeSeason, setActiveSeason] = useState(1)
    const renderSeries = useMemo(() => arr.map(item =>
        <SeriesItem seriesNumber={item.number} length={item.length} key={item.number}/>
    ), [])
    return (
        <section>
            <div className={s.seasons}>
                <h2>Сезоны</h2>
                {
                    seasons.map(item =>
                        <button key={item} className={[s.circle, activeSeason === item ? s.active : s.not_active]. join(' ')}
                                onClick={() => setActiveSeason(item)}
                        >
                            {item}
                        </button>
                    )
                }
            </div>
            <List gap={20}>
                {renderSeries}
            </List>

        </section>
    );
};

export default SeriesList;