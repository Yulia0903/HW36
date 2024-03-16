import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import style from './Header.module.scss'
import Slider from '../../components/Slider/Slider'
import MiddlePart from '../../components/Middle-part/Middle-part'
import CategoryOfShop from '../../components/CategoryOfShop/CategoryOfShop'
import WeddingColection from '../../components/WeddingColection/WeddingColection'
import ClothesCards from '../Clothes/Underpants/components/ClothesCards'
import ButtonBrown from '../../components/BrownButton/ButtonBrown'
import { Link } from 'react-router-dom'
import { Container } from '@mui/material'
import Blog from '../../components/Blog/Blog'
import { ToastContainer } from 'react-toastify'

export default function MainPage() {
    const { container, header, slider, catalogy, button, weeding } = style
    return (
        <div className={container}>
            <div data-aos="fade-down" className={header}>
                <Header />
            </div>
            <div data-aos="zoom-in-up" className={slider}>
                <Slider />
            </div>
            <MiddlePart data-aos="flip-left" />
            <CategoryOfShop
                content="Категорії магазину"
                data-aos="fade-up-right"
            />
            <li className={weeding}>
                <WeddingColection data-aos="fade-up-left" />
            </li>
            <Container maxWidth="lg" breakPoints="lg">
                <li className={catalogy} data-aos="zoom-in">
                    <ClothesCards
                        item="Каталог товарів"
                        category="default"
                        buttonOff={false}
                    />
                </li>
                <Link to="/shop" className={button} data-aos="flip-right">
                    <ButtonBrown content="До каталогу" />
                </Link>
                <Blog data-aos="flip-left" />
            </Container>
            <Footer data-aos="fade-up" />
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
