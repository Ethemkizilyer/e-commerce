import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const CartBtn = () => {
  const navStyle = {
    color: "grey",
  };

 
  return (
    <>
      <NavLink style={navStyle} to="/cart" className="btn btn-light ms-2">
        <span className="fa fa-shopping-basket me-1"></span>

      </NavLink>
    </>
  );
};

export default CartBtn;
