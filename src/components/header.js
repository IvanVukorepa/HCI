import React from "react"
import { Link } from "gatsby"


function User(props){
        if(typeof props.username === "string"){
                return <div className="header_item">{props.username}</div>
        }
        else{
                return <Link to="/signIn" className="header_item">Sign in</Link>
        }
}

class Header extends React.Component {
        search = (e) => {
                let filterString = e.target.value;
                this.props.filterBooks(filterString);
        }

        render() {
                return (
                <div className="header">
                        <Link state={{props: {name: this.props.username, cart: this.props.cart}}} to="/" className="header_item">Book shop</Link>
                        <input className="search input" placeholder="Search" onChange={e => this.search(e)} />
                        <Link to="/blog" className="header_item" state={{props: {cart: this.props.cart, username: this.props.username}}}>Blog</Link>
                        <Link to="/cart" className="header_item" state={{props: {cart: this.props.cart, username: this.props.username}}}>Cart</Link>
                        <User username={this.props.username}></User>
                </div>  
                );
        }
}


export default Header;

/*
export default () => (
    <header className="header">
            <Link to="/" className="header_item">Book shop</Link>
            <input className="search input" placeholder="Search" onChange={this.search} />
            <h3 className="header_item">Sign in</h3>
            <h3 className="header_item">Cart</h3>
    </header>
    )*/