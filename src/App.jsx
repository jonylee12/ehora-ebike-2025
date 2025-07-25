import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Shop from './pages/Shop';
import RomeoCategory from './components/RomeoCategory';
import JulietPage from "./components/JulietPage";
import ProductPage from './pages/ProductPage';
import EbikesPage from './components/EbikesPage';     // asigură-te că și acesta există
import EbikesProductPage from "./pages/EbikesProductPage";
import JulietProductPage from "./pages/JulietProductPage";
import Contact from "./pages/Contact";
import StorePolicy from "./pages/StorePolicy";
import AdminDashboard from "./pages/AdminDashboard";
import ProductDetails from "./components/ProductDetails";
import FeaturedProductDetails from './pages/FeaturedProductDetails';
import FAQ from './pages/FAQ';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/romeo" element={<RomeoCategory />} />
        <Route path="/shop/romeo/:slug" element={<ProductPage />} />
        <Route path="/shop/juliet" element={<JulietPage />} /> {/* ✅ corect */}
        <Route path="/shop/ebike" element={<EbikesPage />} />
       <Route path="/shop/ebike/:slug" element={<EbikesProductPage />} />
       <Route path="/shop/juliet/:slug" element={<JulietProductPage />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/policy" element={<StorePolicy />} />
       <Route path="/admin" element={<AdminDashboard />} />
       <Route path="/product/:productId" element={<ProductDetails />} />
       <Route path="/featured/:id" element={<FeaturedProductDetails />} />
       <Route path="/faq" element={<FAQ />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
