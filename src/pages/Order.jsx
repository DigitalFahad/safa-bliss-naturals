import React from 'react';
import './Order.css';

const Order = () => {
    return (
        <div className="order-page">
            <div className="container section-padding">
                <div className="order-wrapper text-center">
                    <h1 className="mb-md">How to Order</h1>
                    <p className="order-subtitle">We keep it simple. Order directly via WhatsApp and pay when you receive your package.</p>

                    <div className="order-steps text-left">
                        <div className="step">
                            <span className="step-number">1</span>
                            <div>
                                <h3>Browse & Select</h3>
                                <p>Choose the products or kits that fit your needs.</p>
                            </div>
                        </div>
                        <div className="step">
                            <span className="step-number">2</span>
                            <div>
                                <h3>WhatsApp Us</h3>
                                <p>Click the "Order via WhatsApp" button on any product page, or message us directly below.</p>
                            </div>
                        </div>
                        <div className="step">
                            <span className="step-number">3</span>
                            <div>
                                <h3>Confirm & Deliver</h3>
                                <p>Confirm your details with our team. We'll ship your order via courier (Cash on Delivery).</p>
                            </div>
                        </div>
                    </div>

                    <div className="order-actions">
                        <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                            Chat on WhatsApp
                        </a>
                    </div>

                    <div className="payment-info">
                        <h3>Payment Methods</h3>
                        <div className="methods-row">
                            <span className="method-badge">Cash on Delivery</span>
                            <span className="method-badge">Bank Transfer</span>
                            <span className="method-badge">EasyPaisa / JazzCash</span>
                        </div>
                    </div>

                    <div className="delivery-info">
                        <p><strong>Standard Delivery:</strong> 3-5 Working Days across Pakistan.</p>
                        <p><strong>Shipping Cost:</strong> PKR 200 (Free on orders above PKR 5000)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
