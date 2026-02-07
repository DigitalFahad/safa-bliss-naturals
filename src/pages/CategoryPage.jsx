import React from 'react';
import ProductCard from '../components/ui/ProductCard';
import './CategoryPage.css';

const CategoryPage = ({ title, description, products, heroColor = "#F6EED7" }) => {
    return (
        <div className="category-page">
            <header className="category-hero" style={{ backgroundColor: heroColor }}>
                <div className="container text-center">
                    <h1 className="category-title fade-in">{title}</h1>
                    <p className="category-description fade-in">{description}</p>
                </div>
            </header>

            <section className="category-products section-padding">
                <div className="container">
                    <div className="product-grid">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                image={product.image}
                                category={product.category}
                                tagline={product.tagline}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CategoryPage;
