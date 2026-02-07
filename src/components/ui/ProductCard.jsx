import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ id, name, price, image, category, tagline }) => {
    return (
        <div className="product-card card">
            <Link to={`/product/${id}`} className="product-image-link">
                <div className="product-image-container">
                    <img src={image || "https://placehold.co/400x400/F6EED7/0E6B3A?text=Safa+Bliss"} alt={name} className="product-image" />
                </div>
            </Link>
            <div className="product-details">
                <span className="product-category">{category}</span>
                <Link to={`/product/${id}`}>
                    <h3 className="product-name">{name}</h3>
                </Link>
                <p className="product-tagline">{tagline}</p>
                <div className="product-footer">
                    <span className="product-price">PKR {price}</span>
                    <Link to={`/product/${id}`} className="btn btn-outline btn-sm">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
