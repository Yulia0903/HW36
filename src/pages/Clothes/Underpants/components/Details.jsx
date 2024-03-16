import React, { useState } from 'react'
import style from './ClothesCards.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../../../store/slices/binSlice'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
import { useLocalStorage } from '../../../../hooks/useLocalStorage'
import Color from '../../../components/Colors/ColorsSquare'

export default function Details({ item }) {
    const { color, sizes, itemSize, btnBuyItem, descriptionItem } = style

    const dispatch = useDispatch()
    const cardItems = useSelector((state) => state.cart)
    const [cardSaving] = useLocalStorage('cards')
    const [selectedSize, setSelectedSize] = useState(null)

    const addToCard = () => {
        const existingItem = cardItems.find(
            (cartItem) => cartItem.id === item.id
        )

        if (existingItem) {
            toast.success('Цей товар вже у вашому кошику', {
                pauseOnFocusLoss: false,
            })
        } else {
            const updatedCardItems = [...cardItems, item]
            cardSaving(updatedCardItems)
            dispatch(addItem(item))
            toast.success('Товар доданий до кошика')
        }
    }



    return (
        <>
            <div className={descriptionItem}>
                <div className={color}>
                    <Color />
                </div>

                <div className={sizes}>
                    {['XS', 'S', 'M', 'L', 'XL'].map((size, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedSize(size)}
                            className={`${itemSize} ${selectedSize === size ? 'selected-size-class' : ''}`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
                <button onClick={addToCard} className={btnBuyItem}>
                    Придбати
                </button>
            </div>
        </>
    )
}
