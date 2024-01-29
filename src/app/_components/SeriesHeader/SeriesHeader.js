import React from 'react';
import Image from "next/image";
import logo from '@/app/_assets/movies/wednesdau_logo.png';
import bookmark from '@/app/_assets/bookmark.svg';
import heart from '@/app/_assets/heart.svg';
import Button from "@/app/_components/Button/Button";
import s from './SeriesHeader.module.css';

const SeriesHeader = () => {
    return (
        <section className={s.header_section}>
            <div className={s.block}>
                <Image src={logo} alt={'Уэнздэй'} className={s.logo}/>
                <ul className={s.ul}>
                    <li className={s.box}>10</li>
                    <li>2022-...</li>
                    <li>1 сезон</li>
                    <li>США</li>
                    <li>Ужасы</li>
                    <li>0+</li>
                </ul>
                <p>Уэнсдэй предстоит освоить экстрасенсорные cпособности, чтобы
                    остановить местного серийного убийцу и раскрыть тайну родителей.</p>
                <div className={s.btn_block}>
                    <Button gradient={true} content={'Смотреть'}/>
                    <Button content={'Трейлер'}/>
                    <Button content={bookmark}/>
                    <Button content={heart}/>
                </div>
            </div>
        </section>
    );
};

export default SeriesHeader;