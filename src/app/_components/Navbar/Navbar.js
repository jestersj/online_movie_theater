'use client'
import React from 'react';
import Image from "next/image";
import logo from '@/app/_assets/Logo.png';
import up from '@/app/_assets/arrow-up.svg';
import play from '@/app/_assets/collection-play.svg';
import heart from '@/app/_assets/heart.svg';
import person from '@/app/_assets/person.svg';
import house from '@/app/_assets/house-door.svg';
import search from '@/app/_assets/search.svg';
import tv from '@/app/_assets/tv.svg';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <a href={'/'}>
                <Image src={logo} alt={'ТVOЁ'} className={s.logo}/>
            </a>
            <div className={s.btn_cont}>
                <a href={'/'}>
                    <Image src={search} alt={'Поиск'}/>
                </a>
                <a href={'/'}>
                    <Image src={house} alt={'Домой'}/>
                </a>
                <a href={'/'}>
                    <Image src={play} alt={'Кинотеатр'}/>
                </a>
                <a href={'/'}>
                    <Image src={tv} alt={'Устройство'}/>
                </a>
                <a href={'/'}>
                    <Image src={heart} alt={'Избранное'}/>
                </a>
                <a href={'/'}>
                    <Image src={person} alt={'ЛК'}/>
                </a>
            </div>
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                <Image src={up} alt={'Наверх'}/>
            </button>
        </nav>
    );
};

export default Navbar;