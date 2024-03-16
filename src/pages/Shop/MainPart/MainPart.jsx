import React from 'react'
import HeaderMainSection from './components/Header/HeaderMainSection'
import Catelogies from './components/Categories/Catelogies'
export default function MainPart() {
    return (
        <div>
            <HeaderMainSection titleSite="Магазин" />
            <Catelogies />
        </div>
    )
}
