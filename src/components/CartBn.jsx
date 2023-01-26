import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const CartBtn = () => {
  const navStyle = {
    color: "grey",
  };

   const {products} = useSelector((state) => state.speed);
  console.log(products);
  return (
    <>
      <NavLink style={navStyle} to="/cart" className="btn btn-light ms-2">
        <span className="fa fa-shopping-basket me-1"></span>
        {products
          .map((item) => item.qty)
          .reduce((prev, curr) => prev + curr, 0)}
      </NavLink>
    </>
  );
};

export default CartBtn;
