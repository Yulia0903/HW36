import React from 'react'
import { Element } from 'react-scroll'
import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { animateScroll as scroll } from 'react-scroll'
import styles from './Middle-part.module.scss'
import ButtonBrown from '../BrownButton/ButtonBrown'
import { Link } from 'react-router-dom'
import { Container } from '@mui/material'

const MiddlePart = () => {
    return (
        <Element name="middlePart" className={styles.middlePartSection}>
            <Container maxWidth="lg" breakPoint="lg">
                <Row className={styles.grid}>
                    <Col md={6} className={styles.textSection}>
                        <div className={styles.flex}>
                            <h2>Ваша особлива мить стилю і спокуси!</h2>
                            <p>
                                Наша білизна виражає вашу унікальну особистість
                                та стиль. Ви зможете вибрати серед різноманіття
                                - від романтичної до сміливої, від класичної до
                                модної. Наша колекція задовільнить навіть
                                найвибагливіших клієнтів і дозволить вам
                                відчувати себе впевнено і прекрасно у будь-якій
                                ситуації.
                            </p>
                            <Link to="/shop">
                                <ButtonBrown content="До каталогу" />
                            </Link>
                        </div>
                    </Col>
                    <Col md={6} className={styles.imgGrid}>
                        <img
                            className={`${styles.imageSection} ${styles.imageAnimation}`}
                            src={require('../../assets/main/karlozi.jpg')}
                            alt="Karlozi"
                        />
                    </Col>
                </Row>
            </Container>
        </Element>
    )
}

export default MiddlePart
