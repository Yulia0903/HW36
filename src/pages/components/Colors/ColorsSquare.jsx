import React, { useState } from 'react'
import style from './Color.module.scss'

export default function Color() {
    const { flexCenterColor, colorSquareWhite, buttonColor, colorSquareBlack } =
        style

    const [selectedColor, setSelectedColor] = useState(null)
    return (
        <div className={flexCenterColor}>
            {['Чорний'].map((color, index) => (
                <button
                    key={index}
                    onClick={() => setSelectedColor(color)}
                    className={`${buttonColor} ${selectedColor === color ? colorSquareBlack : colorSquareWhite}`}
                ></button>
            ))}
        </div>
    )
}
