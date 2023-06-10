import React from "react";
import "./css/Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://m.media-amazon.com/images/I/61qa3132IFL._SX3000_.jpg"
          alt=""
          className="home_image"
        />
      </div>
      <div className="home_row">
        <Product
          id="12345"
          title="The lean startup"
          price={29.99}
          image="https://m.media-amazon.com/images/I/416rFVdx1HL._SX331_BO1,204,203,200_.jpg"
          rating={5}
        />
        <Product
          id="23451"
          title="Amazon Basics 48-Pack AA Alkaline High-Performance Batteries, 1.5 Volt, 10-Year Shelf Life"
          price={29.99}
          image="https://m.media-amazon.com/images/I/81ZnAYiX5sL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          rating={4}
        />
      </div>
      <div className="home_row">
        <Product
          id="12234"
          title="Apple iPad (9th Generation): with A13 Bionic chip, 10.2-inch Retina Display, 64GB"
          image="https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_SL1500_.jpg"
          price={48.39}
          rating={4}
        />
        <Product
          id="99222"
          title="Missufe Women's Sleeveless Tank Ruched Casual Knee Length "
          price={28.39}
          image="https://m.media-amazon.com/images/I/718kyZDB2YL._AC_UY500_.jpg"
          rating={4}
        />
        <Product
          id="54444"
          title="LHKNL Headlamp Flashlight, 1200 Lumen Ultra-Light Bright LED "
          price={48.39}
          image="https://m.media-amazon.com/images/I/71DxWxvCwlL._AC_SX679_.jpg"
          rating={4}
        />
      </div>
      <div className="home_row">
        <Product
          id="55558"
          title="SAMSUNG 32-inch Class LED Smart FHD TV 1080P (UN32N5300AFXZA, 2018 Model), Black"
          price={248.39}
          image="https://m.media-amazon.com/images/I/81Sb3VocD4L._AC_SL1500_.jpg"
          rating={4}
        />
      </div>
    </div>
  );
}
export default Home;
