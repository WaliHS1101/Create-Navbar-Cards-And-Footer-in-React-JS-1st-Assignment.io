import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Nav from "./Navbar";
import Card from "./Card";
import Footer from "./Footer";
import "./index.css"
import imgX3 from "./img/BMW X3.jpg"
import imgX5 from "./img/BMW X5.jpg"
import imgX6 from "./img/BMW X6.jpg"
import imgM3 from "./img/BMW 3 M3.jpg"
import img5S from "./img/BMW 5 Series.jpg"
import imgM8 from "./img/BMW M8.jpg"
import Navbar2 from "./Navbar2";

let Nav2Links = ["Home2", "About2", "Contact2", "Product2"]

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

    <StrictMode>
        <Nav bgclr="black" clr="white" link1="Home" link2="Product" link3="About" link4="Contact" />
        <Card TClr="white" CBgClr="black" img1={imgX3} n1="BMW X3" img2={imgX5} n2="BMW X5" img3={imgX6} n3="BMW X6" img4={imgM3} n4="BMW 3 M3" img5={img5S} n5="BMW 5 Series" img6={imgM8} n6="BMW M8" />
        <Navbar2 Links2={Nav2Links} />
        <Footer />
    </StrictMode>

)