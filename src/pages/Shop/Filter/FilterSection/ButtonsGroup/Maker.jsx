import React from 'react'
import style from './ButtonsGroup.module.scss'

const makers = ['Fox lingerie', 'Pour moi', 'Milavista', 'Agent Provocateur']

export default function Maker() {
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
