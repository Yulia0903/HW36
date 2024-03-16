import React from 'react'
import ClothesCards from '../../../pages/Clothes/Underpants/components/ClothesCards'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import { Container } from '@mui/material'
import style from './Layout.module.scss'

export default function LayoutForBlogPages({
    title,
    descriptionOfTitle,
    titleAdvice,
    descriptionTitleAdvice,
    descriptionTitleAdviceSecondTxt,
    titlePosition,
    titlePositionDescription,
    titlePositionSecondTxt,
    titleAdviceVideo,
    titleAdviceVideoDescription,
    titleAdviceVideoDescriptionSecondTxt,
}) {
    const {
        titlePage,
        miniTitle,
        txt,
        flexUseImg,
        flexPositionItem,
        flexVideo,
        img,
        info,
    } = style
    return (
        <>
            <Header data-aos="fade-down" />
            <Container maxWidth="lg" breakpoints="lg">
                <h1 className={titlePage} data-aos="fade-right">
                    {title}
                </h1>
                <p className={txt} data-aos="fade-left">
                    {descriptionOfTitle}
                </p>
                <div className={flexUseImg} data-aos="zoom-in">
                    <img
                        className={img}
                        src="https://demox-000-18.site-x.pro/WebCache/Media/demox-000-18/_assets/still-life-bra-lingerie-ratio-jpg.webp"
                        alt=""
                    />
                    <div className={info}>
                        <h3 className={miniTitle}>{titleAdvice}</h3>
                        <p className={txt}>{descriptionTitleAdvice}</p>
                        <p className={txt}>{descriptionTitleAdviceSecondTxt}</p>
                        <ClothesCards
                            category="pageRecomendation"
                            disabled={false}
                            buttonOff={false}
                        />
                    </div>
                </div>
                <div className={flexPositionItem} data-aos="fade-up">
                    <h3 className={miniTitle}>{titlePosition}</h3>
                    <p className={txt}>{titlePositionDescription}</p>
                    <p className={txt}>{titlePositionSecondTxt}</p>
                    <ClothesCards
                        category="pageRecomendation"
                        disabled={false}
                        buttonOff={false}
                    />
                </div>
                <div className={flexVideo} data-aos="fade-up">
                    <div>
                        <h3 className={miniTitle}>{titleAdviceVideo}</h3>
                        <p className={txt}>{titleAdviceVideoDescription}</p>
                        <p className={txt}>
                            {titleAdviceVideoDescriptionSecondTxt}
                        </p>
                        <ClothesCards
                            category="pageRecomendation"
                            disabled={false}
                            buttonOff={false}
                        />
                    </div>
                    <img
                        className={img}
                        src="https://demox-000-18.site-x.pro/WebCache/Media/demox-000-18/_assets/female-lingerie-arrangement-still-life%20(3)-ratio-jpg.webp"
                        alt=""
                        data-aos="fade-up"
                    />
                </div>
            </Container>
            <Footer />
        </>
    )
}
