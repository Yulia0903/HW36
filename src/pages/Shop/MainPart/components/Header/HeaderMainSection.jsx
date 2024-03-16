import React, { useState, useRef, useEffect } from 'react'
import style from './HeaderMainSection.module.scss'
import '@mui/material'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import FilterPhone from './FilterPhone/FilterPhone'
import { NavLink } from 'react-router-dom'

const popularity = [
    { title: 'Від дешевих до дорогих', path: '/fromCheapToExpensive' },
    { title: 'Від дорогих до дешевих', path: '/fromExpensiveToCheap' },
    { title: 'Новинки', path: '/newItems' },
    { title: 'Акційні', path: '/salesItems' },
    { title: 'За замовчуванням', path: '/default' },
    { title: 'Популярні', path: '/popular' },
]

export default function HeaderMainSection({ titleSite, disabled }) {
    const {
        button,
        main,
        flex,
        title,
        spanSort,
        list,
        ulListOfPopularity,
        open,
        filterIcon,
        link,
    } = style

    const [isOpenModalFilter, setIsOpenFilterModal] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef(null)

    const handleClickOutsidePage = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutsidePage)
        return () => {
            document.removeEventListener('mousedown', handleClickOutsidePage)
        }
    }, [])
    return (
        <div className={main}>
            <div className={flex}>
                <h1 className={title}>{titleSite}</h1>
                {disabled && (
                    <span className={spanSort}>
                        Сортування:{' '}
                        <span>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={button}
                            >
                                Популярні
                            </button>
                            <ul
                                className={`${ulListOfPopularity} ${isOpen ? open : ''}`}
                                ref={ref}
                            >
                                {isOpen &&
                                    popularity.map((e) => (
                                        <li className={list}>
                                            <NavLink
                                                className={link}
                                                key={e}
                                                to={e.path}
                                            >
                                                {e.title}
                                            </NavLink>
                                        </li>
                                    ))}
                            </ul>
                        </span>
                        <FilterAltIcon
                            onClick={() => setIsOpenFilterModal(true)}
                            className={filterIcon}
                        />
                        {isOpenModalFilter && (
                            <FilterPhone
                                setIsOpenFilterModal={setIsOpenFilterModal}
                            />
                        )}
                    </span>
                )}
            </div>
        </div>
    )
}
