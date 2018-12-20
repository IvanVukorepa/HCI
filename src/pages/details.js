import React from "react"
import Layout from "../components/layout.js"
import image from "../images/image.jpg"
import Item from "../components/items.js" 

import "../style/details.css"


export default (props) => (
    <div> 
      <Layout />
      <div className="details">
        <div className="imageDetails"></div>
        <div className="aboutDetails"></div>
        <div className="priceDetails"></div>
      </div>
    </div>
  ) 