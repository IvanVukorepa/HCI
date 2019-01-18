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
      description: null
    }

  }

  componentDidMount() {
    let props = this.props.location.state.props;
    this.setState({
      title: props.title,
      author: props.author,
      price: props.price,
      description: props.description
    });
  }

  render() {
    return (
    <div className="detailsSite"> 
      <Layout />
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
          <div className="detailsCheckoutButton">Add to cart</div>
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