import React from 'react'
import styles from './Blog.module.scss'
import { Link } from 'react-router-dom'

export default function BlogsParts({ img, title, text, link, date }) {
    return (
        <>
            <div className={styles.column}>
                <Link to={link} className={styles.link}>
                    <img src={img} alt="..." />
                    <div className={styles.infoItems}>
                        <span className={styles.date}>{date}</span>
                        <h3 className={styles.title}>{title}</h3>
                        <p className={styles.text}>{text}</p>
                        Детальніше <span className={styles.arrow}>&rarr;</span>
                    </div>
                </Link>
            </div>
        </>
    )
}
