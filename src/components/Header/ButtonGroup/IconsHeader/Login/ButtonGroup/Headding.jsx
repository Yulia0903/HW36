import React from 'react'
import style from '../Login.module.scss'
import { IoClose } from 'react-icons/io5'

export default function Headding({ content, setActive }) {
    const { title, txt, cross } = style
    return (
        <>
            <div className={title}>
                <h1 className={txt}>{content}</h1>
                <IoClose className={cross} onClick={() => setActive(false)} />
            </div>
            <hr />
        </>
    )
}
