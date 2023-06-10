import React from "react";
import "./css/Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/pageElements/additiveGraphics/dotToPillCascade._TTW_.png"
          alt=""
          className="checkout_ad"
        />
        <div>
          <h3> Hello, {!user ? "Guest" : user.email}</h3>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
        </div>
      </div>
      <div className="checkout_left">
        <Subtotal />
        {/* <h2>The Subtotal will go here</h2> */}
      </div>
    </div>
  );
}
export default Checkout;
