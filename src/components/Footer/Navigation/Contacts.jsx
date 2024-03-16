import { CiLocationOn } from 'react-icons/ci'
import { CgMailOpen } from 'react-icons/cg'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaCcVisa } from 'react-icons/fa'
import { RiMastercardFill } from 'react-icons/ri'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaViber } from 'react-icons/fa'

import style from '../Footer.module.scss'

export default function Contacts() {
    const { listContacts, icon, title } = style
    return (
        <div>
            <nav>
                <h4 className={title}>Контакти</h4>
                <li className={listContacts}>
                    <CiLocationOn className={icon} /> м. Київ, вул. Київська 1
                </li>
                <li className={listContacts}>
                    <FaPhoneAlt className={icon} />
                    +38 (099) 000 00 00
                </li>
                <li className={listContacts}>
                    <CgMailOpen className={icon} /> support@gmail.com
                </li>
                <li className={listContacts}>
                    <FaCcVisa className={icon} />{' '}
                    <RiMastercardFill className={icon} />
                </li>
                <li className={listContacts}>
                    <a href="https://www.instagram.com/">
                        <FaInstagram className={icon} />
                    </a>{' '}
                    <a href="https://www.facebook.com/">
                        <FaFacebook className={icon} />
                    </a>{' '}
                    <a href="viber://chat?number=%2B380999999999">
                        <FaViber className={icon} />
                    </a>
                </li>
            </nav>
        </div>
    )
}
