import React from 'react'
import { useState } from 'react'
import Hamburger from 'hamburger-react'
import style from './ButtonGroup.module.scss'
import PopUpModalWindow from './PopUpModalWindow'

export default function HamburgerWindow() {
    const { hamburger, windowPopUpCenter } = style
    const [isOpen, setOpen] = useState(false)
    return (
        <div className={hamburger}>
            <div>
                <Hamburger
                    className={hamburger}
                    toggled={isOpen}
                    toggle={setOpen}
                />
            </div>

            {isOpen && <div className={windowPopUpCenter}><PopUpModalWindow onSetOpen={setOpen}/></div>}
        </div>
    )
}
