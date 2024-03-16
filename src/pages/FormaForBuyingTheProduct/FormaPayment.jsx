import React, { useState } from 'react'
import { Container } from '@mui/material'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import OrderDetails from './OrderDetails/OrderDetails'
import style from './FormaPayment.module.scss'
import ButtonBrown from '../../components/BrownButton/ButtonBrown'
import Title from '../../components/Title/Title'
import { toast, ToastContainer } from 'react-toastify'

const countries = ['USA', 'Ukraine', 'Poland', 'Armenia', 'Other']

const FormaPayment = () => {
    const {
        disabled,
        decrement,
        flex,
        counterItems,
        price,
        size,
        title,
        img,
        list,
        deliveryInfo,
        formik,
        fieldFormik,
        flexFormik,
        comment,
        animationComment,
        flexSum,
        container,
    } = style

    const navigate = useNavigate()

    const [commentIsOpen, setCommentIsOpen] = useState(false)
    const cards = JSON.parse(localStorage.getItem('cards')) || []
    const user = JSON.parse(localStorage.getItem('user')) || []
    const [counters, setCounters] = useState(cards.map(() => 1))

    const handleSubmit = async (values) => {
        console.log('Form values:', values)
        localStorage.removeItem('cards')

        toast.success(
            'Найближчим часом ми зв`яжимось із вами, дякуємо за замовлення!'
        )
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve(navigate('/shop'))
            }, 6000)
        )
    }

    return (
        <>
            <Header />
            <Container
                className={container}
                maxWidth="lg"
                breakPoint="lg"
                data-aos="fade-up"
            >
                {cards.length === 0 && user === 0 ? (
                    <>
                        <Title title="Оформити замовлення" />

                        <p>
                            У вас немає товарів до замовлення, або ви не увійшли
                            до акаунта
                        </p>
                    </>
                ) : (
                    <>
                        <Title title="Оформити замовлення" />
                        <p>Ви зайшли, із пошти {user.email}</p>
                        <div className={flexFormik}>
                            <Formik
                                initialValues={{
                                    country: '',
                                    city: '',
                                    description: '',
                                }}
                                onSubmit={handleSubmit}
                            >
                                <Form className={formik}>
                                    <label htmlFor="country">
                                        Оберіть країну
                                    </label>
                                    <Field
                                        as="select"
                                        name="country"
                                        className={fieldFormik}
                                        required
                                    >
                                        <option value="">
                                            Select a country
                                        </option>
                                        {countries.map((country) => (
                                            <option
                                                key={country}
                                                value={country}
                                            >
                                                {country}
                                            </option>
                                        ))}
                                    </Field>
                                    <label htmlFor="city">Місто</label>
                                    <Field
                                        id="city"
                                        name="city"
                                        placeholder="Введіть місто"
                                        className={fieldFormik}
                                        required
                                    />
                                    <li
                                        className={comment}
                                        onClick={() =>
                                            setCommentIsOpen(!commentIsOpen)
                                        }
                                    >
                                        Додати коментар
                                    </li>
                                    {commentIsOpen && (
                                        <div className={animationComment}>
                                            <Field
                                                as="textarea"
                                                id="description"
                                                name="description"
                                                className={fieldFormik}
                                            />
                                            <li
                                                onClick={() =>
                                                    setCommentIsOpen(false)
                                                }
                                                className={comment}
                                            >
                                                Сховати
                                            </li>
                                        </div>
                                    )}

                                    <ButtonBrown
                                        content="Оформити замовлення"
                                        type="submit"
                                    />
                                </Form>
                            </Formik>

                            <OrderDetails
                                cards={cards}
                                counters={counters}
                                setCounters={setCounters}
                                {...{
                                    flex,
                                    img,
                                    title,
                                    size,
                                    price,
                                    disabled,
                                    decrement,
                                    counterItems,
                                    deliveryInfo,
                                    list,
                                    flexSum,
                                }}
                            />
                        </div>
                    </>
                )}
            </Container>
            <ToastContainer
                position="bottom-right"
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
            <Footer />
        </>
    )
}

export default FormaPayment
