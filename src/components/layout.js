import React from "react"
import Header from "../components/header.js"
import Menu from "../components/menu.js"
/*
export default (props) => (
    <div> 
      <Header filterBooks={props.filterBooks} cart={props.cart}/>
      <Menu clickPopular={props.clickPopular}/>
    </div>
  )   
*/
  
class Layout extends React.Component {
/*
  filterBooks = (filterString) => {
    this.props.filterBooks(filterString);
  }
  */

  render(){
    return (
      <div> 
        <Header username={this.props.username} filterBooks={this.props.filterBooks} cart={this.props.cart}/>
        <Menu clickPopular={this.props.clickPopular}/>
      </div>
    );
  }
}

export default Layout;