import React from "react"
import { Link } from "gatsby"
import Categories from "../components/categories.js"
import Items from "../components/items.js"
import Layout from "../components/layout.js"

import "../style/index.css"
import "../style/cssReset.css"

export default () => (
  <div> 
    <Layout />
    <div className = "site">
        <Categories />
        <Items />
    </div>
  </div>
)         