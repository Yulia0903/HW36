import React from 'react';
import './Categories-card.module.scss';

const CategoriesCard = ({data_categories}) => {
    return (
        <>
            <h2>Категорії</h2>
            <div className="categories-grid">
                {data_categories.map(category => (
                    <div key={category.id} className="category-item">
                        <div className="content">
                            <img src={category.image} alt="category"/>
                            <h3>{category.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </>

    );
};

export default CategoriesCard;
