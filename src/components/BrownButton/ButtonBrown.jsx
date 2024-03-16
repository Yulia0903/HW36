import React from 'react'
import style from './ButtonBrown.module.scss'

export default function ButtonBrown({ content, type }) {
    return (
        <>
            <button type={type} className={style.button}>
                {content}
            </button>
        </>
    )
}
