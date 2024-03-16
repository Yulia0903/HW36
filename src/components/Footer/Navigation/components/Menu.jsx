import { Link } from 'react-router-dom'
import style from './Footer.module.scss'

export default function Menu() {
    const { flexFooter, title, list } = style
    return (
        <div>
            <nav className={flexFooter}>
                <h1 className={title}>Меню</h1>
                <Link to="/shop" className={list}>
                    Магазин
                </Link>
                <Link to="/about" className={list}>
                    Покупцям
                </Link>
                <Link to="/blogs" className={list}>
                    Блог
                </Link>
                <Link to="/contacts" className={list}>
                    Контакти
                </Link>
            </nav>
        </div>
    )
}
