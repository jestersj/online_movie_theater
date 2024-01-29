import React from 'react';
import Image from "next/image";
import s from './Button.module.css';

const Button = ({gradient = false, content}) => {
    return (
        <button className={[s.btn, gradient ? s.gradient : s.gray].join(' ')}>
            {
                typeof content === 'string'
                ?
                    content
                    :
                    <Image src={content} alt='' className={s.icon}/>
            }
        </button>
    );
};

export default Button;