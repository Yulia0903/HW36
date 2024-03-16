import React from 'react'
import style from './Registration.module.scss'
import { IoClose } from 'react-icons/io5'
import RegisterForm from './FormRegistration/RegisterForm'

export default function Registration({ active, setActive }) {
    const { modal, activeWindow, modalContent, cross, txt, title } = style
    return (
        <div>
            <div className={`${modal} ${active ? activeWindow : ''}`}>
                <div
                    className={modalContent}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className={title}>
                        <h1 className={txt}>Реєстрація</h1>
                        <IoClose
                            className={cross}
                            onClick={() => setActive(false)}
                        />
                    </div>
                    <hr />
                    <RegisterForm setActive={setActive}/>
                </div>
        
            </div>  
        </div>
    )
}
