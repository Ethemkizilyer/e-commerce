import { Tabs, Tab } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./ProductDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, getData } from "../redux/reducer";

function ProductDetail({ products,data}) {
  const [pro, setPro] = useState(JSON.parse(localStorage.getItem("product")) || []);

  let dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();

  //   const { products } = useSelector((store) => store.speed);

  let ert = data?.find((product) => {
    return product.id == id;
  });

  ert && localStorage.setItem("product", JSON.stringify(ert));

  let [alert, setAlert] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const updateBtn = () => {
    let btnEl = document.querySelector("#upload-btn");
    btnEl.style.backgroundColor = "green";
    btnEl.style.color = "white";
    btnEl.innerText = "Added to Cart!";
  };

  let datam = {
    id: pro?.id,
    name: pro?.title,
    price: pro?.price,
    qty: 1,
  };

  return (
    <div>
      <div className="container">
        {alert === true ? (
          <div className="my-alert">
            <p>Only few in stock</p>
          </div>
        ) : null}
        <div className="row justify-content-md-center">
          <div className="col-md-6 mt-4">
            <div className="pt-5">
              <img src={pro?.image} width="100%" alt="" />
              <h5 className="title">{pro?.title}</h5>
              <p>₺{pro?.price}</p>
              <button
                id="upload-btn"
                className="btn btn-secondary"
                onClick={() => {
                  dispatch(addToBasket(datam));
                  return updateBtn();
                }}
              >
                Add to Cart
              </button>
              <button
                onClick={() => {
                  navigate(-1);
                }}
                className="btn btn-secondary"
              >
                Go back
              </button>
            </div>
          </div>
          <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Info">
              <p>
                Our natural hyaluronic acid serum helps to hydrate your skin
                from within and plump fine lines and wrinkles. By using 200mg of
                concentrated low molecular weight hyaluronic acid per bottle,
                this serum is able to deeply penetrate the skin on your face and
                neck, leaving it glowing and naturally hydrated all day.
              </p>

              <p>
                Our fast absorbing COSMOS Organic formulation also includes
                organic pomegranate extract to aid cellular turnover, and a
                delicate, gentle fragrance of organic rosewater.
              </p>
            </Tab>
            <Tab eventKey="profile" title="Key ingridients">
              <p>
                <strong>Hyaluronic Acid:</strong> With the ability to hold up to
                1,000 times its own weight in water, Hyaluronic Acid (HA) is a
                hydrating super ingredient. Our Evolve Hyaluronic Serum uses
                this incredible water retention ability to help reduce wrinkles
                and fine lines,
              </p>
              <p>
                <strong>Pomegranate Extract:</strong>High in ellagic acid,
                pomegranate extract helps to regulate cell turnover and
                strengthen the cell membrane. This helps to limit water loss and
                free radical damage, and these incredible benefits are the
                reason why we’ve included it in our natural Hyaluronic Acid
                Serum.
              </p>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
