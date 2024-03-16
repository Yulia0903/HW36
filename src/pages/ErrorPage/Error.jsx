import React from 'react'
import style from './ErrorPage.module.scss'

export function ErrorPage() {
    const { container, label } = style
    return (
        <div>
            <div className={container}>
                <h1>Oops!</h1>
                <p className={label}>404</p>
                <p>Sorry, an unexpected error has occurred.</p>
            </div>
        </div>
    )
}
