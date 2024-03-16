import React, { useEffect } from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { IoLocation } from 'react-icons/io5'
import style from './Contacts.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ReversedSection from './ButtonGroups/ReversedSection'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Contacts() {
    const { title, container, flexList, listOfTelephonce } = style

    useEffect(() => {
        AOS.init({
            duration: 2000,
        })
    }, [])

    return (
        <div>
            <Header data-aos="fade-in" />
            <div className={container} data-aos="fade-up">
                <div>
                    <h6 className={title} data-aos="fade-right">
                        КОНТАКТИ
                    </h6>
                    <ul data-aos="fade-left">
                        <h6 className={flexList}>
                            {<FaPhoneAlt />}Зателефонувати нам
                        </h6>
                        <ul className={listOfTelephonce} data-aos="zoom-in">
                            <a tel="+38 (000) 000 00 00">+38 (000) 000 00 00</a>
                            <a tel="+38 (000) 000 00 00">+38 (000) 000 00 00</a>
                            <a tel="+38 (000) 000 00 00">+38 (000) 000 00 00</a>
                        </ul>
                        <h6 className={flexList}>
                            {<MdEmail />} Електронна пошта
                        </h6>
                        <span data-aos="fade-down">support@support.com.ua</span>
                        <h6 className={flexList}>
                            {<IoLocation />} Адреса офісу
                        </h6>
                        <span data-aos="fade-up">м. Київ, вул. Київська</span>
                    </ul>
                </div>
                <ReversedSection data-aos="fade-zoom-in" />
            </div>
            <Footer data-aos="fade-in" />
        </div>
    )
}
