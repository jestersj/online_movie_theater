import React from 'react';
import Image from "next/image";
import logo from '@/app/_assets/movies/jones_logo.png';
import Button from "@/app/_components/Button/Button";
import s from './HeaderSection.module.css';

const HeaderSection = () => {
    return (
        <section className={s.header_section}>
            <div className={s.block}>
                <Image src={logo} alt={'Индиана Джонс'} className={s.logo}/>
                <p>Неувядающий авантюрист и пытливый археолог-исследователь по‑прежнему в седле.</p>
                <div className={s.btn_block}>
                    <Button gradient={true} content={'Смотреть'}/>
                    <Button content={'О фильме'}/>
                </div>
            </div>
        </section>
    );
};

export default HeaderSection;