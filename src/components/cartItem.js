import React from "react"
import image from "../images/image.jpg"

class CartItem extends React.Component{
    removeFromCart = (e, id) => {
        this.props.removeFromCart(id);
    }

    amountChange = (e, id) => {
        this.props.amountChange(id, e.target.value);
    }

    render(){
        return (
            <div className="cartItemContainer">
                <img className="cartImage" src={image} alt="alt"/>
                <div className="cartItem">
                    <div className="cartItemTitle">{this.props.item.book.title}</div>
                    <div className="cartItemAuthor">{this.props.item.book.author}</div>
                    <div className="cartItemPriceContainer">
                        <div className="cartItemPrice">{this.props.item.book.price}€</div>
                        <div className="cartItemRemove" onClick={(e) => {
                            this.removeFromCart(e, this.props.item.book.id)}}>Remove</div>
                    </div>
                </div>
                <div className="amount">
                    <div>Amount</div>
                    <input className="amountCounter" type="number" defaultValue={this.props.item.amount} min="1" onChange={(e) => this.amountChange(e, this.props.item.book.id)}/>
                </div>
            </div>
        );
    };
}

export default CartItem;