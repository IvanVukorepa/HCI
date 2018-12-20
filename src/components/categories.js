import React from "react"
import { Link } from "gatsby"


function category(props) {
    return (
        <Link to="/">
            <div className="category">
                <span className="cat">{props.category}</span>
            </div>
        </Link>         
    )
}

export default (props) => (
    <div className="categories">
        {category({category:"Kategorija"})}
        {category({category:"Kategorija"})}
        {category({category:"Kategorija"})}
        {category({category:"Kategorija"})}
        {category({category:"Kategorija"})}
        {category({category:"Kategorija"})}
    </div>
    )