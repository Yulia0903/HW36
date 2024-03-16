import React, { useState } from 'react'
import style from './Login.module.scss'
import FormLogin from './ButtonGroup/FormLogin'
import Registration from './ButtonGroup/Registration/Registration'

export default function Login({ active, setActive }) {
    const { modal, modalContent, activeWindow, main } = style

    const [modalRegister, setModalRegister] = useState(false)
    return (
        <div>
            <div className={`${modal} ${active ? activeWindow : ''}`}>
                <div
                    className={modalContent}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className={main}>
                        <FormLogin
                            onClick={() => setActive(false)}
                            setActive={setActive}
                            active={active}
                            setModalRegister={setModalRegister}
                        />
                    </div>
                </div>
            </div>
            <Registration active={modalRegister} setActive={setModalRegister} />
        </div>
    )
}
