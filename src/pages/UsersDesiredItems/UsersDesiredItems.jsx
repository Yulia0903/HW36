import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import style from './UserDesiredItems.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import {
    removeDisiredItem,
    loadCartDesiredItems,
} from '../../store/slices/desiredSlice'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useEffect } from 'react'

export default function UsersDesiredItems() {
    const {
        container,
        title,
        img,
        titleItem,
        price,
        list,
        removeItem,
        submitButton,
        itemList,
    } = style
    const [, , localRemove] = useLocalStorage()
    const dispatch = useDispatch()
    const desiredItems = useSelector((state) => state.desired)

    useEffect(() => {
        const savedDesiredItems =
            JSON.parse(localStorage.getItem('desiredItems')) || []
        dispatch(loadCartDesiredItems(savedDesiredItems))
    }, [dispatch])

    const handleRemoveDesiredItems = (desiredId) => {
        localRemove(dispatch(removeDisiredItem({ id: desiredId })))
        const updatedDesiredItems = desiredItems.filter(
            (item) => item.id !== desiredId
        )
        localStorage.setItem(
            'desiredItems',
            JSON.stringify(updatedDesiredItems)
        )
    }

    return (
        <div>
            <Header />
            <div className={container}>
                {desiredItems.length === 0 ? (
                    <>
                        <div className={title}>
                            <h1>Обране</h1>
                            <p>Ваш список порожній</p>
                        </div>
                    </>
                ) : (
                    <>
                        <h1 className={title}>Ваші Уподобання</h1>
                        <ul className={itemList}>
                            {desiredItems.map((item) => {
                                return (
                                    <li className={list} key={item.id}>
                                        <img
                                            className={img}
                                            src={item.image}
                                            alt=""
                                        />
                                        <div>
                                            <h2 className={titleItem}>
                                                {item.title}
                                            </h2>
                                            <p>{item.description}</p>
                                            <p className={price}>
                                                {item.price}
                                            </p>
                                            <li
                                                className={removeItem}
                                                onClick={() =>
                                                    handleRemoveDesiredItems(
                                                        item.id
                                                    )
                                                }
                                            >
                                                Видалити
                                            </li>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </>
                )}
            </div>
            <Footer />
        </div>
    )
}
