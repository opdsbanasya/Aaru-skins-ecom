import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "../Components/Home";
import Products from "../Components/Products";
import About from "../Components/About";
import Cart from "../Components/Cart";
import Contact from "../Components/Contact";
import CategoryPage from "../Components/CategoryPage";
import ProductFilter from "../Components/ProductFilter";
import ProductViewPage from "../Components/ProductViewPage";
import Checkout from "../Components/Checkout";
import ConfirmationPage from "../Components/ConfirmationPage";
import SearchPage from "../Components/SearchPage";





function Routing(){

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:name" element={<ProductFilter />} />
                <Route path="/categorypage" element={<CategoryPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart />} >
                    <Route path="/cart/:checkout" element={<Checkout />} />
                </Route>
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/:name" element={<ProductViewPage />} />
                <Route path="/confirmation" element={<ConfirmationPage />} />
                <Route path="/search" element={<SearchPage />} />
                
            </Routes>
        </>
    )
}

export default Routing;