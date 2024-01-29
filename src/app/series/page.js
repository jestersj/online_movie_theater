import React from 'react';
import SeriesHeader from "@/app/_components/SeriesHeader/SeriesHeader";
import SeriesList from "@/app/_components/SeriesList/SeriesList";
import info from '@/app/_assets/info-circle.svg';
import Image from "next/image";
import List from "@/app/_components/List/List";
import movies from "@/app/movies";
import Card from "@/app/_components/Card/Card";
import s from './page.module.css';

const Page = () => {
    return (
        <>
            <SeriesHeader/>
            <SeriesList/>
            <section className={s.description}>
                <h2>Описание</h2>
                <p>Детективная история, наполненная сверхъестественными силами. Главная героиня сериала — Уэнздей Аддамс, одна из членов семейки Аддамс и единственная дочь Гомеса и Мортиши Аддамсов, которая становится студенткой академии «Невермор». Она пытается овладеть своими проявившимися экстрасенсорными способностями, помешать чудовищным убийствам монстра, что терроризирует местный городок Джерико, а также разгадать тайну, в которую были втянуты её родители 32 года назад, — и всё это на фоне её новых и очень запутанных отношений в академии.
                </p>
                <div className={s.warning}>
                    <Image src={info} alt={'Инфо'} className={s.icon}/>
                    Контент может содержать сцены курения и употребления спиртных напитков. Курение и чрезмерное употребление алкоголя вредит вашему здоровью.

                </div>
            </section>
            <List title={'Похожее'} gap={24}>
                {
                    movies.topTen.map(item =>
                        <Card item={item} key={item.name} isSmall={true}/>
                    )
                }
            </List>
            <section className={s.information}>
                <h2>Информация</h2>
                <div className={s.info_block}>
                    <div className={s.col}>
                        <div className={s.cell}>
                            <p className={s.info_key}>Премьера в мире</p>
                            <p className={s.info_value}>31 октября 2022</p>
                        </div>
                        <div className={s.cell}>
                            <p className={s.info_key}>Оригинальное название</p>
                            <p className={s.info_value}>Wednesday</p>
                        </div>
                    </div>
                    <div className={s.col}>
                        <div className={s.cell}>
                            <p className={s.info_key}>Страна</p>
                            <p className={s.info_value}>США</p>
                        </div>
                        <div className={s.cell}>
                            <p className={s.info_key}>Жанры</p>
                            <p className={s.info_value}>Фэнтези, Комедия, Криминал, Детектив</p>
                        </div>
                    </div>
                    <div className={s.col}>
                        <div className={s.cell}>
                            <p className={s.info_key}>Язык аудиодорожки</p>
                            <p className={s.info_value}>Rus, Eng</p>
                        </div>
                        <div className={s.cell}>
                            <p className={s.info_key}>Качество</p>
                            <p className={s.dark_cell}>Full HD</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;