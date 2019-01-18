import React from "react"
import { Link } from "gatsby"


class Header extends React.Component {
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
                        <h3 className="header_item">Cart</h3>
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