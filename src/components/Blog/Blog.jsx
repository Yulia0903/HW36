import React from 'react'
import styles from './Blog.module.scss'
import BlogsParts from './BlogsParts'
import { ToastContainer } from 'react-toastify'

const Blog = ({ title }) => {
    return (
        <div className={styles.blogContainer}>
            <h2>{title}</h2>
            <ul className={styles.columnsContainer}>
                <BlogsParts
                    img={require('../../assets/main/still-life-bra-lingerie-ratio-10x7-proportions-jpg-ratio-width-500-jpg.webp')}
                    date="23.08.2023"
                    title="Секрети Селф-Лав: збережи красу з нашою нижнью..."
                    text="Краса та впевненість починаються з догляду за собою, і
                    нижня білизна грає важливу роль в цьому процесі. У цій
                    статті..."
                    link="/top5"
                />
                <li className={styles.dismissed}>
                    <BlogsParts
                        img={require('../../assets/main/bride-silk-robe-putting-stockings-wedding-morning-preparation-concept-getting-ready-dressing-lingerie-boudoir-space-text-ratio-10x7-proportions-jpg-ratio-width-500-jpg.webp')}
                        date="04.08.2023"
                        title="Таємниці комфорту: як вибрати ідеальну нижню білизну"
                        text="Справжній комфорт починається з вибору правильною нижньої
                    білизни. У нашій новій статті ми розкриємо всі таємниці
                    вибору..."
                        link="/mysteryComfort"
                    />
                </li>

                <li className={styles.dismissed}>
                    <BlogsParts
                        img={
                            'https://demox-000-18.site-x.pro/WebCache/Media/demox-000-18/_assets/still-life-bra-lingerie%20(1)-ratio-10x7-proportions-jpg-ratio-width-500-jpg.webp'
                        }
                        date="30.01.2023"
                        title="Зваблива ніжність: Топ-5 луків для впевненості та комфорту!
                    "
                        text="Чи не час віддати належне увозі своїй нижній білизні? У
                    нашій новій статті ми розглянемо п`ять захоплюючих
                    способів..."
                        link="/selfLove"
                    />
                </li>
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
            </ul>
        </div>
    )
}

export default Blog
