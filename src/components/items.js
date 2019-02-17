import React from "react"
import image from "../images/image.jpg"
import { Link } from "gatsby"

import '..//style/items.css'


class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }

    componentDidMount(){
        this.setState({
            books: this.props.books
        }); 
    }

    componentDidUpdate = () => {
        if(this.state.books !== this.props.books)
            this.setState({
                books: this.props.books
            });    
    }

    addToCartClick = (e, id) => {
        e.preventDefault();
        this.props.addToCart(id);
    }

    render(){
        return (
            <div className="item_container">
            {this.state.books.map(book => {
               return (
                <Link className="item" to="/details/" key={book.id} state={{props: book}}>
                    <img src={image} alt="not found" height="100" width="100" />
                    <div className="itemBody">
                        <div className="title">{book.title}</div>
                        <div className="author">{book.author}</div>
                        <div className="price_container">
                            <div className="price" onClick={this.addToCartClick}>{book.price}€</div>
                            <div className="addToCartButton" onClick={(e) => this.addToCartClick(e, book.id)}>Add To Cart</div>
                        </div>
                    </div>
                </Link>         
            )
            })}
            </div>
        );
    }
}

export default Items;
/*
export default () => (
    <div className="item_container">
        fvhbsea,jsadbf,jsahbd       
    </div>
    )
*/
    /*
function item(props) {
    return (
        <Link className="item" to="/details/" state={{props: props}}>
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
*/