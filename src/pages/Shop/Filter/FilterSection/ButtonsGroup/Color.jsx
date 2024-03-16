import React from 'react'
import style from './ButtonsGroup.module.scss'

const makers = ['Чорний', 'Молочний']

export default function Color() {
    const { titleMaker, labelMaker } = style
    return (
        <div>
            {makers.map((maker) => (
                <div>
                    <label className={labelMaker} htmlFor="">
                        <input type="checkbox" />
                        <span className={titleMaker}>{maker}</span>
                    </label>
                </div>
            ))}
        </div>
    )
}
