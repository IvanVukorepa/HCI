import React from "react"
import Header from "../components/header.js"
import Menu from "../components/menu.js"

export default (props) => (
    <div> 
      <Header filterBooks={props.filterBooks}/>
      <Menu />
    </div>
  )   

  /*
class Layout extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  filterBooks = (filterString) => {
    this.props.filterBooks(filterString);
  }

  render(){
    return (
      <div> 
      <Header filterBooks={this.props.filterBooks}/>
      <Menu />
    </div>
    );
  }
}

export default Layout;*/