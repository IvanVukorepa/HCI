import React from "react"
import image from "../images/image.jpg"

class CartItem extends React.Component{
    removeFromCart = (e, id) => {
        this.props.removeFromCart(id);
    }

    render(){
        return (
            <div className="cartItemContainer">
                <img className="cartImage" src={image} alt="alt"/>
                <div>
                    <div className="cartItemTitle">{this.props.item.book.title}</div>
                    <div className="cartItemAuthor">{this.props.item.book.author}</div>
                    <div className="cartItemPriceContainer">
                        <div className="cartItemPrice">{this.props.item.book.price}€</div>
                        <div className="cartItemRemove" onClick={(e) => {
                            this.removeFromCart(e, this.props.item.book.id)}}>Remove</div>
                    </div>
                </div>
            </div>
        );
    };
}

export default CartItem;