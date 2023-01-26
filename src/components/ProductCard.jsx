import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item,index}) => {
    const navigate= useNavigate()
  return (
    <>
    <div
      className="col-md-4 cursor-pointer"
      onClick={() => navigate("/detail/" + item.id)}
    >
      <img
        className="product-card"
        src={item.image}
        width="117px"
        height="90px"
        alt="product"
      />
      <h5 data-cy="ert" className="title ">
        {item.title}
      </h5>
      {/* <p className="content">{item.description}</p> */}
      <p>₺{item.price}</p>
    </div>
    
    </>
  );
}

export default ProductCard