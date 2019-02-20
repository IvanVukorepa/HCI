import React from "react"
import Categories from "../components/categories.js"
import Items from "../components/items.js"
import Layout from "../components/layout.js"

import "../style/index.css"
import "../style/cssReset.css"


var jsonData = require('../books.json');
var genres = require('../genres.json');

class Index extends React.Component {
  constructor(props){
    super(props);
    this.filterBooks = this.filterBooks.bind(this);
    this.state = {
      allBooks: jsonData,
      allGenres: genres,
      Cart: [],
      username: String
    }
  }

  componentDidMount(){
    if(this.props.location.state !== null && this.props.location.state.props !== undefined){
      let props = this.props.location.state.props;
      this.setState({
        username: props.name,
        Cart: props.cart === undefined ? [] : props.cart
      });
    }
  }

  filterBooks = (filterString) =>{
    let allBooks = jsonData; 
    if(filterString !== ""){   
      let filteredBooks = allBooks.filter(el => {
        return el.title.toLowerCase().includes(filterString.toLowerCase()) === true;
      });
      this.setState({
        allBooks: filteredBooks
      });
    }
    else{
      this.setState({
        allBooks: allBooks
      });
    }
  }

  clickPopular = () => {
    let books = jsonData;
    let popularBooks = books.filter(book => book.popular);

    this.setState({
      allBooks: popularBooks
    });
  }

  genreClick = (genreName) => {
    let allBooks = jsonData; 
 
    let filteredBooks = allBooks.filter(el => {
      return el.genre === genreName
    });

    this.setState({
      allBooks: filteredBooks
    })

  }

  addToCart = (id) => {
    let cart = this.state.Cart;
    let book = jsonData.find(book => book.id === id);

    console.log(this.state);

    let index = cart.findIndex((el) => {
      return el.book.id === id
    });

    if(index !== -1){
      cart[index].amount++;
    }
    else{
      cart.push({"book": book, "amount": 1});
    }
    this.setState({
      Cart: cart
    });
  }

  render() {
    return(
      <div> 
      <Layout cart={this.state.Cart} username={this.state.username} filterBooks={this.filterBooks} clickPopular={this.clickPopular}/>
      <div className = "site">
          <Categories genres={this.state.allGenres} genreClick={this.genreClick}/>
          <Items books={this.state.allBooks} addToCart={this.addToCart} cart={this.state.Cart} username={this.state.username}/>
      </div>
    </div>
    );
  }
}

export default Index;

/*
export default () => (
  <div> 
    <Layout />
    <div className = "site">
        <Categories />
        <Items books={jsonData}/>
    </div>
  </div>
)         */