import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Filter from './Filter/Filter'
import style from './Shop.module.scss'
import { Container } from '@mui/material'
import MainPart from './MainPart/MainPart'
import ClothesCards from '../Clothes/Underpants/components/ClothesCards'

export default function Shop() {
    const { filter, flex, flexCards } = style
    return (
        <div>
            <Header data-aos="fade-down" />
            <Container maxWidth="lg" breakPoint="lg">
                <div className={flex} data-aos="fade-up">
                    <aside className={filter} data-aos="fade-right">
                        <Filter />
                    </aside>
                    <main className={flexCards} data-aos="fade-left">
                        <MainPart />
                        <ClothesCards category="default" />
                    </main>
                </div>
            </Container>
            <Footer data-aos="fade-up" />
        </div>
    )
}
