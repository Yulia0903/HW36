import React from 'react'
import './Categories-list.module.scss'

const CategoryList = (data_categories) => {
    return (
        <div className="category-list-container">
            <div className="category-list-top-bar"></div>
            <ul className="category-list">
                {data_categories.map((category) => (
                    <li key={category.id}>{category.title}</li>
                ))}
            </ul>
            <div className="category-list-bottom-bar"></div>
        </div>
    )
}

export default CategoryList
