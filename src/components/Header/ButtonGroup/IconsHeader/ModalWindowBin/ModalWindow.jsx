import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import style from './ModalWindow.module.scss'
import img from '../../../../../assets/nav/bin.jpeg'
import { IoClose } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, loadCartItems } from '../../../../../store/slices/binSlice'

export default function ModalWindow({ active, setActive, item }) {
    const {
        txt,
        main,
        title,
        modal,
        modalContent,
        activeWindow,
        cross,
        button,
        footerBin,
        binImg,
        binList,
        binPrice,
        link,
        binTitle,
    } = style
    const dispatch = useDispatch()
    const cardItems = useSelector((state) => state.cart)

    useEffect(() => {
        const savedCartItems = JSON.parse(localStorage.getItem('cards')) || []
        dispatch(loadCartItems(savedCartItems))
    }, [dispatch])

    const handleRemoveItemFromBin = (itemId) => {
        dispatch(removeItem({ id: itemId }))

        const savedCartItems = JSON.parse(localStorage.getItem('cards')) || []
        const updatedCartItems = savedCartItems.filter(
            (item) => item.id !== itemId
        )
        localStorage.setItem('cards', JSON.stringify(updatedCartItems))
    }

    return (
        <div
            className={`${modal} ${active ? activeWindow : ''}`}
            onClick={() => setActive(false)}
        >
            <div className={modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={title}>
                    <h1 className={txt}>Кошик</h1>
                    <IoClose
                        className={cross}
                        onClick={() => setActive(false)}
                    />
                </div>

                <hr />
                <div className={main}>
                    {cardItems.length === 0 ? (
                        <div>
                            <img src={img} alt="" />
                            <p>У вашому кошику немає товарів.</p>
                            <div className={footerBin}>
                                <button
                                    className={button}
                                    onClick={() => setActive(false)}
                                >
                                    Продовжити покупки
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <ul>
                                {cardItems.map((item) => (
                                    <div key={item.id}>
                                        <li className={binList}>
                                            <img
                                                className={binImg}
                                                src={item.image}
                                                alt=""
                                            />
                                            <div>
                                                <h2 className={binTitle}>
                                                    {item.title}
                                                </h2>
                                                <p className={binPrice}>
                                                    {item.price}
                                                </p>
                                                <li
                                                    onClick={() =>
                                                        handleRemoveItemFromBin(
                                                            item.id
                                                        )
                                                    }
                                                >
                                                    Видалити
                                                </li>
                                            </div>
                                        </li>
                                    </div>
                                ))}
                                <div className={footerBin}>
                                    <button className={button}>
                                        <Link
                                            className={link}
                                            to="/formPayment"
                                        >
                                            Оформити заказ
                                        </Link>
                                    </button>
                                    <button
                                        className={button}
                                        onClick={() => setActive(false)}
                                    >
                                        Продовжити покупки
                                    </button>
                                </div>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
