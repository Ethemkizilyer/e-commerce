
import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import { useEffect, useState } from "react";
import Main from "./components/Main.jsx";
import ProductDetail from "./components/ProductDetail";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./redux/reducer";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";
import LearnMore from "./components/LearnMore";
import Cart from "./components/Cart";


function App() {
const dispatch=useDispatch()

useEffect(()=>{
  dispatch(getData())
},[dispatch])
const { products,data } = useSelector((store) => store.speed);


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />

          <Route
            path="/detail/:id"
            element={<ProductDetail products={products} data={data} />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<LearnMore />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
