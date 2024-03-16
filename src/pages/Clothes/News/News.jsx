import React from 'react'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Filter from '../../Shop/Filter/Filter'
import ClothesCards from '../Underpants/components/ClothesCards'
import style from './NewItem.module.scss'
import { Container } from '@mui/material'
import { ToastContainer } from 'react-toastify'

export default function News() {
    const { filter, flexFilter } = style
    return (
        <div>
            <Header />
            <Container maxWidth="lg" breakPoint="lg">
                <div className={flexFilter}>
                    <div className={filter}>
                        <Filter />
                    </div>
                    <ClothesCards item="Новинки" category="newItems" />
                </div>
            </Container>
            <Footer />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}
