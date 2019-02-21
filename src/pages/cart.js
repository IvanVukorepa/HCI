import React from "react"
import Layout from "../components/layout.js"
import CartItem from "../components/cartItem"

import '../style/cart.css'

class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cart: [],
            username: String
        }
    }
    componentDidMount(){
        try{
            let props = this.props.location.state.props;
            this.setState({
                cart: props.cart===undefined ? [] : props.cart,
                username: props.username
            });
        }
        catch{}
    }

    totalPrice = () => {
        let totalPrice = 0;

        this.state.cart.forEach(item => {
            totalPrice = totalPrice + item.book.price*item.amount;
        });
        
        return totalPrice;
    }

    removeFromCart = (id) => {
        let cart = this.state.cart;
    
        let index = cart.findIndex((el) => {
          return el.book.id === id
        });
    
        if(index !== -1){
          cart.splice(index, 1);
        }

        else{
        }

        this.setState({
          Cart: cart
        });
    }

    checkoutClick = () => {
        this.setState({
            cart: []
        });
    }

    render(){
        return(
            <div className="cart">
                <Layout cart={this.state.cart} username={this.state.username}/>
                <div className="cartTitle">Your cart:</div>
                <div className="cartContainer"> 
                    <div> 
                        {this.state.cart.map(item => {
                            return <CartItem key={item.book.id} removeFromCart={this.removeFromCart} item={item}/>
                        })}  
                    </div>
                    <div className="totalPriceContainer">
                        <div className="totalPrice">Total: {this.totalPrice()}€</div>
                        <div className="totalPriceButton" onClick={this.checkoutClick}>Checkout</div>
                    </div> 
                </div>         
            </div>
        );
    };
}

export default Cart;