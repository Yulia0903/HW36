import React, { useState, useRef, useEffect } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { addDisiredItem } from '../../../../store/slices/desiredSlice'
import { ToastContainer, toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { useLocalStorage } from '../../../../hooks/useLocalStorage'
import { useSelector } from 'react-redux'

export default function FavoriteIcons({ item }) {
    const [isFavorited, setIsFavorited] = useState(false)
    const [setItem, getItem, removeItem] = useLocalStorage('desiredItems')
    const desiredItems = useSelector((state) => state.desired)
    const dispatch = useDispatch()

    const desiredProductLove = () => {
        const existingItem = desiredItems.find(
            (cartItem) => cartItem.id === item.id
        )

        if (existingItem) {
            toast.warning('Цей товар вже у ваших Уподобань!')
        } else {
            const updatedDesiredItems = [...desiredItems, item]
            setItem(updatedDesiredItems)
            dispatch(addDisiredItem(item))
            toast.success('Товар доданий до Уподобань')
            setIsFavorited(true)
        }
    }

    return (
        <>
            <button
                onClick={desiredProductLove}
                style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    outline: 'none',
                    fontSize: '35px',
                }}
            >
                {isFavorited ? (
                    <AiFillHeart
                        style={{
                            border: '1px solid black',
                            borderRadius: '10px',
                            padding: '5px',
                            background: 'white',
                        }}
                        color="red"
                    />
                ) : (
                    <AiOutlineHeart
                        style={{
                            border: '1px solid black',
                            borderRadius: '10px',
                            padding: '5px',
                            background: 'white',
                        }}
                        color="black
                "
                    />
                )}
            </button>
        </>
    )
}
