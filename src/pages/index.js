import React from "react"
import Categories from "../components/categories.js"
import Items from "../components/items.js"
import Layout from "../components/layout.js"

import "../style/index.css"
import "../style/cssReset.css"


var jsonData = require('../books.json');
var genres = require('../genres.json');

function FilterOptions(props){
  if(props.component.state.filter === filterEnum.noFilter)
    return <Categories genres={props.component.state.allGenres} genreClick={props.component.genreClick}/>
  
  return null;
}

function FilteredBy(props){
  if(props.component.state.filter !== filterEnum.noFilter){
    switch(props.component.state.filter){
      case filterEnum.popular:
        return <div className="filterOptions">Popular <div className="x" onClick={props.component.removeFilter}>x</div></div>;
      case filterEnum.new:
        return <div className="filterOptions">New <div className="x" onClick={props.component.removeFilter}>x</div></div>;
      case filterEnum.special:
        return <div className="filterOptions">Special <div className="x" onClick={props.component.removeFilter}>x</div></div>;
      case filterEnum.genre:
        return <div className="filterOptions">{props.component.state.genreFilter} <div className="x" onClick={props.component.removeFilter}>x</div></div>;
      default: 
      
    }
  }
  return null;
}

var filterEnum = {
  noFilter: 0,
  popular: 1,
  new: 2,
  special: 3,
  genre: 4,
  string: 5
}

class Index extends React.Component {
  constructor(props){
    super(props);
    this.filterBooks = this.filterBooks.bind(this);
    this.state = {
      allBooks: jsonData,
      allGenres: genres,
      Cart: [],
      username: String,
      filter: filterEnum.noFilter,
      genreFilter: String
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
        allBooks: filteredBooks,
        filter: filterEnum.string
      });
    }
    else{
      this.setState({
        allBooks: allBooks,
        filter:filterEnum.noFilter
      });
    }
  }

  clickPopular = () => {
    let books = jsonData;
    let popularBooks = books.filter(book => book.popular);

    this.setState({
      allBooks: popularBooks,
      filter: filterEnum.popular
    });
  }

  removeFilter = () => {
    this.setState({
      allBooks: jsonData,
      filter: filterEnum.noFilter
    });
  }

  genreClick = (genreName) => {
    let allBooks = jsonData; 
 
    let filteredBooks = allBooks.filter(el => {
      return el.genre === genreName
    });

    this.setState({
      allBooks: filteredBooks,
      filter: filterEnum.genre,
      genreFilter: genreName
    })

  }

  addToCart = (id) => {
    let cart = this.state.Cart;
    let book = jsonData.find(book => book.id === id);

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
          <FilterOptions component={this} />
          <div>
            <FilteredBy component={this}/>
            <Items books={this.state.allBooks} addToCart={this.addToCart} cart={this.state.Cart} username={this.state.username}/>
          </div>
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