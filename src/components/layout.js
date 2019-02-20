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
function renderMenu(render, component){
  if(render)
    return <Menu clickPopular={component.props.clickPopular}/>
  return null;
}
  
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
        {renderMenu(this.props.renderMenu === false ? false : true, this)}
      </div>
    );
  }
}

export default Layout;