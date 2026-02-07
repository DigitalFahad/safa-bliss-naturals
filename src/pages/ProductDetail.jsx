import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();

    // Find product in all categories
    const product = PRODUCTS.all.find(p => p.id === id);

    if (!product) {
        return (
            <div className="product-not-found container text-center section-padding">
                <h2>Product Not Found</h2>
                <p>The product you are looking for does not exist.</p>
                <Link to="/" className="btn btn-primary">Return Home</Link>
            </div>
        );
    }

    // WhatsApp Logic
    const phoneNumber = "923001234567";
    const message = `Hi Safa Bliss, I would like to order: ${product.name}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="product-detail-page section-padding">
            <div className="container">
                <div className="product-detail-grid">
                    {/* Image Gallery (Single Image for now) */}
                    <div className="product-gallery">
                        <div className="main-image-container">
                            <img src={product.image} alt={product.name} className="main-image" />
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="product-info">
                        <span className="product-detail-category">{product.category}</span>
                        <h1 className="product-detail-title">{product.name}</h1>
                        <p className="product-detail-tagline">{product.tagline}</p>

                        <div className="product-detail-price">PKR {product.price}</div>

                        <p className="product-detail-description">{product.description}</p>

                        <div className="whatsapp-action">
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block btn-lg">
                                Order via WhatsApp
                            </a>
                            <p className="cod-note">Cash on Delivery Available • Free Shipping on orders over PKR 5000</p>
                        </div>

                        {product.benefits && (
                            <div className="product-section">
                                <h3>Benefits</h3>
                                <ul className="detail-list">
                                    {product.benefits.map((benefit, index) => (
                                        <li key={index}>{benefit}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {product.usage && (
                            <div className="product-section">
                                <h3>How to Use</h3>
                                <p>{product.usage}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
