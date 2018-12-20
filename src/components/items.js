import React from "react"
import image from "../images/image.jpg"
import { Link } from "gatsby"

function item(props) {
    return (
        <Link className="item" to="/details/">
            <img src={image} alt="not found" height="100" width="100" />
            <div className="title">{props.title}</div>
            <div className="author">{props.author}</div>
            <div>
                <div className="price">{props.price}</div>
                <button></button>
            </div>
        </Link>         
    )
}

export default () => (
    <div className="item_container">
        {item({title:"Title", author:"Autor Autor", price:"price"})}
        {item({title:"Title", author:"Autor Autor", price:"price"})}
        {item({title:"Title", author:"Autor Autor", price:"price"})}
        {item({title:"Title", author:"Autor Autor", price:"price"})}
        {item({title:"Title", author:"Autor Autor", price:"price"})}
        {item({title:"Title", author:"Autor Autor", price:"price"})}        
    </div>
    )