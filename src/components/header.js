import React from "react"
import { Link } from "gatsby"


class Header extends React.Component {
        constructor(props){
                super(props);
                this.state = {
                        cart: [],
                };
        }

        componentDidMount(){
                this.setState({
                        cart: this.props.cart,
                });
        }

        search = (e) => {
                let filterString = e.target.value;
                this.props.filterBooks(filterString);
        }

        render() {
                return (
                <div className="header">
                        <Link to="/" className="header_item">Book shop</Link>
                        <input className="search input" placeholder="Search" onChange={e => this.search(e)} />
                        <h3 className="header_item">Sign in</h3>
                        <Link to="/cart" className="header_item" state={{props:
                                this.props.cart
                        }}>Cart</Link>
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