import React, {Component} from "react"
import Layout from "../components/layout.js"
import image from "../images/image.jpg"

import "../style/details.css"


class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      author: null,
      price: null,
      description: null,
      cart: []
    }

  }

  componentDidMount() {
    if(this.props.location.state != null){
      let props = this.props.location.state.props;
      this.setState({
        id: props.book.id,
        title: props.book.title,
        author: props.book.author,
        price: props.book.price,
        description: props.book.description,
        cart: props.cart === undefined ? [] : props.cart,
        username: props.username
      });
    }
  }

  addToCartClick = (id) => {
    let cart = this.state.cart;

    let index = cart.findIndex((el) => {
      return el.book.id === id
    });

    if(index !== -1){
      cart[index].amount++;
    }
    else{
      cart.push({"book": this.props.location.state.props.book, "amount": 1});
    }

    this.setState({
      cart: cart
    });
  }

  render() {
    return (
    <div className="detailsSite"> 
      <Layout cart={this.state.cart} username={this.state.username}/>
      <div className="details">
        <div className="imageDetails">
          <div className="detailsImage"><img src={image} alt="wef" className="imageImg"></img></div>
        </div>
        <div className="detailsAbout">
          <div className="detailsAboutTitle">{this.state.title}</div>
          <div className="detailsAboutAuthor">{this.state.author}</div>
          <div className="detailsAboutDescription">{this.state.description}</div>
        </div>
        <div className="detailsCheckout">
          <div className="detailsCheckoutPrice">Price: {this.state.price}€</div>
          <div className="detailsCheckoutButton" onClick={(e) => this.addToCartClick(this.state.id)}>Add to cart</div>
        </div>
      </div>
    </div>
    );
  }
}

export default Details;



/*
export default (props) => (
    <div> 
      <Layout />
      <div className="details">
        <div className="imageDetails">
          <div className="image"></div>
        </div>
        <div className="aboutDetails">
          <div className="title">{props.title}</div>
          <div className="author">{props.author}</div>
        </div>
        <div className="priceDetails"></div>
        <div>
          <div className="price">{props.price}</div>
        </div>
      </div>
    </div>
  ) */