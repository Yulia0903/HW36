import React from 'react'
import style from '../Contacts.module.scss'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function ReversedSection() {
    const { flexInput, input, bigInput, sectionInput, button, flexEnd, title } =
        style

    const submitForm = (event) => {
        event.preventDefault()
        toast("Найближчим часом ми з вами зв'яжимося")
    }

    return (
        <div>
            <div>
                <h6 className={title}>Зворотній зв'язок</h6>
                <form onSubmit={submitForm} className={sectionInput}>
                    <div className={flexInput}>
                        <input
                            type="text"
                            className={input}
                            placeholder="*Ім`я"
                            required
                        />
                        <input
                            type="tel"
                            className={input}
                            placeholder="Телефон"
                            pattern="^\+38 \(\d{3}\) \d{3} \d{2} \d{2}$"
                            title="Формат: +38 (000) 000 00 00"
                        />
                        <input
                            type="email"
                            className={input}
                            placeholder="*Пошта"
                            required
                            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                            title="someone@example.com"
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Повідомлення"
                        className={bigInput}
                    />
                    <div className={flexEnd}>
                        <input
                            className={button}
                            type="submit"
                            value="Надіслати"
                        />
                        <ToastContainer />
                    </div>
                </form>
            </div>
        </div>
    )
}
