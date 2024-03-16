import React from 'react'

export default function OrderDetails({
    cards,
    counters,
    flex,
    setCounters,
    img,
    title,
    size,
    price,
    disabled,
    decrement,
    counterItems,
    deliveryInfo,
    list,
    listOfAtributes,
    flexSum,
}) {
    let allPaymentOfItems = cards.reduce((acc, el, index) => {
        const priceWithoutCurrency = parseFloat(el.price.replace(/[^\d.]/g, ''))
        return acc + priceWithoutCurrency * counters[index]
    }, 0)

    const handleIncrement = (index) => {
        const newCounters = [...counters]
        newCounters[index] += 1
        setCounters(newCounters)
        const itemPrice = parseFloat(cards[index].price.replace(/[^\d.]/g, ''))

        allPaymentOfItems += itemPrice
    }

    const handleDecrement = (index) => {
        const newCounters = [...counters]
        newCounters[index] = Math.max(newCounters[index] - 1, 1)
        setCounters(newCounters)
        const itemPrice = parseFloat(cards[index].price.replace(/[^\d.]/g, ''))
        allPaymentOfItems -= itemPrice
    }

    return (
        <div className={deliveryInfo}>
            <ul>
                <p>Замовлення</p>
                {cards.map((item, index) => (
                    <li className={list} key={index}>
                        <div className={flex}>
                            <img className={img} src={item.image} alt="" />
                            <ul className={listOfAtributes}>
                                <li className={title}>{item.title}</li>
                                <li className={size}>
                                    Розмір XS, Колір: Чорний
                                </li>
                                <li className={price}>
                                    {item.price}
                                    <div className={counterItems}>
                                        <li
                                            onClick={() =>
                                                handleDecrement(index)
                                            }
                                            className={
                                                counters[index] === 1
                                                    ? disabled
                                                    : decrement
                                            }
                                            disabled={counters[index] === 1}
                                        >
                                            -
                                        </li>
                                        {counters[index]}
                                        <li
                                            className={list}
                                            onClick={() =>
                                                handleIncrement(index)
                                            }
                                        >
                                            +
                                        </li>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                ))}
                <div className={flexSum}>
                    <p>Загальна сума</p>
                    <p>{allPaymentOfItems.toString()}$</p>
                </div>
            </ul>
        </div>
    )
}
