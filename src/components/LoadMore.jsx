import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import ProductCard from './ProductCard'
import Data from "../data.js"

const LoadMore = ({products ,setProducts}) => {
    const [showButton,setShowButton]=useState(true)
console.log(Data);
    const eth =  () => {
    
         setShowButton(false);
    
    };
    const et = async () => {
      try {
        const { data } = await axios(
          "https://fakestoreapi.com/products?limit=3"
        );
        return setProducts([...products, ...data]);
      } catch (error) {
        console.log(error.message);
      }
    };

    useEffect(() => {
      et();
    }, []);

  return (
<>
      {showButton ? (
        <Button
          className="color mx-auto"
          variant="outline-danger"
          size="lg"
          onClick={() => eth()}
        >
          Click me to load more
        </Button>
      ): Data?.map((item,index)=>{return <ProductCard item={item} key={index}/>})}
 </>   
  );
}

export default LoadMore