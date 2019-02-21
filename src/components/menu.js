import React from "react"


class Menu extends React.Component {
    
    clickPopular = () => {
        try{
            this.props.clickPopular();
        }
        catch{
            
        }
        
    }

    render() {
        return(
        <div className="menu">
            <h3 className="header_item mobile">categories</h3>
            <h3 className="header_item" onClick={this.clickPopular}>popular</h3>
            <h3 className="header_item">special offers</h3>
            <h3 className="header_item" >new</h3>
        </div>
        );
    }
}

export default Menu;

/*
export default () => (
    <div className="menu">
        <h3 className="header_item mobile">categories</h3>
        <h3 className="header_item">popular</h3>
        <h3 className="header_item">special offers</h3>
        <h3 className="header_item" >new</h3>
    </div>
    )
*/