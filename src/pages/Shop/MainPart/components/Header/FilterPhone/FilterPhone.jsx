import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import style from './FilterPhone.module.scss'
import Filter from '../../../../Filter/Filter'

export default function FilterPhone({ setIsOpenFilterModal }) {
    const { filterPhone, button, filter, closeIcon } = style
    return (
        <div className={filterPhone}>
            <CloseIcon
                className={closeIcon}
                onClick={() => setIsOpenFilterModal(false)}
            />
            <hr />
            <Filter className={filter} />
            <button
                onClick={() => setIsOpenFilterModal(false)}
                className={button}
            >
                Переглянути товари
            </button>
        </div>
    )
}
