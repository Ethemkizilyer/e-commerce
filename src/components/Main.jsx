import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DATA from "../data.js";
import { getData } from "../redux/reducer.jsx";
import LoadMore from "./LoadMore.jsx";
import ProductCard from "./ProductCard.jsx";

const Main = () => {
  // const [products, setProducts] = useState();
  const dispatch = useDispatch();

  const { products,data } = useSelector(store => store.speed);
  // console.log(products);

  
  useEffect(() => {
    dispatch(getData());
  }, []);
  // const ethm=async()=>{
  //     try {
  //     const {data} =await axios("https://fakestoreapi.com/products?limit=6");
  //         return setProducts(data)
  //     } catch (error) {
  //         console.log(error.message);
  //     }
  // }

  // useEffect(()=>{
  //     ethm()
  // },[])

  return (
    <>
      <div className="main">
        <h1>SPRING COLLECTION</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cumque
          nisi repudiandae voluptates magni dolorem?
        </p>
        <Button variant="outline-info" as={Link} to="/about">
          Learn More
        </Button>
      </div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          {data?.map((item, index) => {
            return <ProductCard key={index} item={item} />;
          })}
          <LoadMore data={data} />
        </div>
      </div>
    </>
  );
};

export default Main;
