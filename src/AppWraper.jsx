import React from 'react'
import App from './App'
import style from './index.module.scss'
import { Provider } from 'react-redux'
import { store } from './store'
import './firebase'

export default function AppWraper() {
    return (
        <div className={style.layoutBody}>
            <div className={style.reset}>
                <Provider store={store}>
                    <App />
                </Provider>
            </div>
        </div>
    )
}
