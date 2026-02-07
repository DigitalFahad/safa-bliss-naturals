import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <header className="about-hero">
                <div className="container text-center">
                    <h1 className="fade-in">Nature works best when treated with respect.</h1>
                </div>
            </header>

            <section className="section-padding container">
                <div className="about-content">
                    <div className="about-text">
                        <h2>Our Story</h2>
                        <p>Safa Bliss Naturals was born from a desire to return to simplicity. In a world of quick fixes and harsh chemicals, we wanted to create a sanctuary of gentle, effective care rooted in the wisdom of nature.</p>
                        <p>We believe that true beauty is a reflection of health. That's why every product we make is designed not just to cover up flaws, but to nourish deeper, supporting your body's natural ability to heal and thrive.</p>
                    </div>
                    <div className="about-image">
                        <img src="https://placehold.co/500x600/F6EED7/0E6B3A?text=Our+Philosophy" alt="Safa Bliss Philosophy" />
                    </div>
                </div>
            </section>

            <section className="values-section section-padding bg-cream">
                <div className="container text-center">
                    <h2 className="section-title">The Safa Standard</h2>
                    <div className="values-grid">
                        <div className="value-item">
                            <h3>Pure by Nature</h3>
                            <p>We strictly avoid mineral oils, sulphates, parabens, and silicones. If it doesn't help you heal, it's not in our bottle.</p>
                        </div>
                        <div className="value-item">
                            <h3>Made in Pakistan</h3>
                            <p>Proudly formulated and crafted locally, using the finest herbs and traditions of our region.</p>
                        </div>
                        <div className="value-item">
                            <h3>Honest Care</h3>
                            <p>We promise consistency, not miracles. Our products work with time and regular use to deliver lasting results.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
