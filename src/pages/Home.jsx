import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ui/ProductCard';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container hero-container">
                    <div className="hero-content fade-in">
                        <span className="hero-label">Pure. Natural. Trusted.</span>
                        <h1 className="hero-title">Gentle care, rooted in nature — designed for everyday healing.</h1>
                        <p className="hero-subtitle">Thoughtfully crafted herbal hair, skin, and wellness products that work with your body, not against it.</p>
                        <div className="hero-actions">
                            <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                Order via WhatsApp
                            </a>
                            <span className="hero-note">Cash on Delivery Available</span>
                        </div>
                    </div>
                    <div className="hero-image fade-in">
                        <img src="https://placehold.co/600x600/F6EED7/0E6B3A?text=Safa+Bliss+Hero" alt="Natural Wellness" />
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="section-padding categories-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Explore Our Collections</h2>
                        <p>Curated systems for every need.</p>
                    </div>
                    <div className="categories-grid">
                        <Link to="/hair" className="category-card">
                            <div className="category-image" style={{ backgroundColor: '#E8F5E9' }}>
                                <img src="https://placehold.co/300x300/E8F5E9/0E6B3A?text=Hair+Care" alt="Hair Care" />
                            </div>
                            <h3>Hair Care</h3>
                        </Link>
                        <Link to="/skin" className="category-card">
                            <div className="category-image" style={{ backgroundColor: '#FFF8E1' }}>
                                <img src="https://placehold.co/300x300/FFF8E1/F5B700?text=Skin+%26+Body" alt="Skin & Body" />
                            </div>
                            <h3>Skin & Body</h3>
                        </Link>
                        <Link to="/wellness" className="category-card">
                            <div className="category-image" style={{ backgroundColor: '#EFEBE9' }}>
                                <img src="https://placehold.co/300x300/EFEBE9/5D4037?text=Wellness" alt="Wellness" />
                            </div>
                            <h3>Wellness</h3>
                        </Link>
                        <Link to="/kits" className="category-card">
                            <div className="category-image" style={{ backgroundColor: '#E0F7FA' }}>
                                <img src="https://placehold.co/300x300/E0F7FA/006064?text=Kits" alt="Kits" />
                            </div>
                            <h3>Kits & Rituals</h3>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Best Sellers / Flagship Product */}
            <section className="section-padding bg-cream">
                <div className="container">
                    <div className="flagship-product">
                        <div className="flagship-image">
                            <img src="https://placehold.co/500x500/0E6B3A/FFFFFF?text=Hair+Revival+Kit" alt="Hair Revival Kit" />
                        </div>
                        <div className="flagship-content">
                            <span className="label-text">Best Seller</span>
                            <h2>Hair Revival Kit</h2>
                            <p className="description">
                                Your hair doesn't need experiments. It needs a system. Our complete 4-step ritual combines external care with internal nourishment for stronger, healthier hair.
                            </p>
                            <ul className="benefits-list">
                                <li>✓ Miracle Herbs Shampoo</li>
                                <li>✓ Miracle Hair Oil</li>
                                <li>✓ Growth Serum</li>
                                <li>✓ Superfood Support</li>
                            </ul>
                            <div className="flagship-actions">
                                <Link to="/product/hair-revival-kit" className="btn btn-primary">View Kit Details</Link>
                                <span className="price">PKR 4,500</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Safa Bliss */}
            <section className="section-padding">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Why Safa Bliss?</h2>
                        <p>Our promise to you and nature.</p>
                    </div>
                    <div className="features-grid">
                        <div className="feature-item">
                            <div className="feature-icon">🌿</div>
                            <h3>Pure by Nature</h3>
                            <p>No mineral oil, parabens, or silicones. Just pure herbal goodness.</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">⏳</div>
                            <h3>Sustainable Results</h3>
                            <p>Designed for daily, long-term use. We believe in consistency over quick fixes.</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">💚</div>
                            <h3>Gentle Healing</h3>
                            <p>Formulations that respect your body's natural balance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Stories of Healing</h2>
                    </div>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <p>"I've tried everything for my hair fall. The Hair Revival Kit was the only thing that felt gentle and actually worked over time."</p>
                            <div className="author">— Sarah A.</div>
                        </div>
                        <div className="testimonial-card">
                            <p>"The Oats Calming Moisturizer is a lifesaver for my sensitive skin. So soothing and light."</p>
                            <div className="author">— Mariam K.</div>
                        </div>
                        <div className="testimonial-card">
                            <p>"Finally a brand that focuses on wellness and not just looking good immediately. Love the philosophy."</p>
                            <div className="author">— Fatima Z.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section-padding text-center">
                <div className="container">
                    <h2 className="mb-md">Begin your wellness ritual today.</h2>
                    <Link to="/kits" className="btn btn-primary">
                        Explore All Kits
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
