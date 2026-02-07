import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Order from './pages/Order';
import { PRODUCTS } from './data/products';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="hair" element={
            <CategoryPage
              title="Hair Care"
              description="Healthy hair isn’t about one product — it’s about a complete routine."
              products={PRODUCTS.hair}
              heroColor="#E8F5E9"
            />
          } />

          <Route path="skin" element={
            <CategoryPage
              title="Skin & Body"
              description="Gentle care for skin that needs comfort, balance, and nourishment."
              products={PRODUCTS.skin}
              heroColor="#FFF8E1"
            />
          } />

          <Route path="wellness" element={
            <CategoryPage
              title="Wellness"
              description="Wellness begins from within. Nourish your body for long-term strength."
              products={PRODUCTS.wellness}
              heroColor="#EFEBE9"
            />
          } />

          <Route path="kits" element={
            <CategoryPage
              title="Kits & Rituals"
              description="Our products are designed to work better together."
              products={PRODUCTS.kits} // Assuming logic to filter kits or use hair-revival-kit
              heroColor="#E0F7FA"
            />
          } />

          <Route path="product/:id" element={<ProductDetail />} />

          <Route path="about" element={<About />} />
          <Route path="contact" element={<Order />} />
          <Route path="order" element={<Order />} />
          <Route path="*" element={<div className="container" style={{ padding: "40px" }}>404 Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
