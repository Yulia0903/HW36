import React from 'react'
import { Container, Carousel, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './Slider.module.scss'
import { Link } from 'react-router-dom'
import ButtonBrown from '../BrownButton/ButtonBrown'

const Slider = () => {
    return (
        <Container fluid className={styles.sliderContainer}>
            <Carousel
                prevIcon={
                    <span
                        data-testid="carousel-control-prev"
                        className={`carousel-control-prev-icon ${styles.customPrev}`}
                    />
                }
                nextIcon={
                    <span
                        data-testid="carousel-control-next"
                        className={`carousel-control-next-icon ${styles.customNext}`}
                    />
                }
                indicators={false}
            >
                <Carousel.Item>
                    <div className={styles.overlay}></div>
                    <img
                        className={`d-block w-100 ${styles.sliderImage}`}
                        src={require('../../assets/slider/momenti dessous.jpeg')}
                        alt="First slide"
                    />
                    <Carousel.Caption className={styles.sliderCaption}>
                        <h1
                            className={styles.title}
                            style={{ textTransform: 'uppercase' }}
                        >
                            Ви заслуговуєте на найкраще
                        </h1>
                        <p className={styles.txt}>
                            Обирайте нижню білизну в нашому магазині
                        </p>
                        <Link to="/shop">
                            <ButtonBrown content="До каталогу" />{' '}
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <div className={styles.overlay}></div>
                    <img
                        className={`d-block w-100 ${styles.sliderImage}`}
                        src={require('../../assets/slider/lca bra.jpg')}
                        alt="Second slide"
                    />
                    <Carousel.Caption className={styles.sliderCaption}>
                        <h1
                            className={styles.title}
                            style={{ textTransform: 'uppercase' }}
                        >
                            Час підкреслити свою красу зсередини!
                        </h1>
                        <p className={styles.txt}>
                            Зроби свій вибір з ТМ - де кожна деталь має значення
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default Slider
