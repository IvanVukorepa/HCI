import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout.js"

import '../style/signIn.css'

function Validation(props){
    if(props.valid)
        return null;
    return <div className="invalidEmail">Email not valid</div>
}

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            valid: Boolean,
            Cart: [],
            username: String
        }
    }

    componentDidMount(){
        if(this.props.location.state !== null && this.props.location.state.props !== undefined){
          let props = this.props.location.state.props;
          this.setState({
            username: props.name,
            Cart: props.cart === undefined ? [] : props.cart
          });
        }
      }

    emailChange = (e) => {
        if(!e.target.value.includes("@")){
            this.setState({
                valid: false
            })
        }
        else{
            this.setState({
                valid: true
            })
        }
    }

    render(){
        return(
            <div>
                <Layout cart={this.state.Cart} username={this.state.username} renderMenu={false}/>
                <div className="signInForm">
                    <Link to="/" className="signInTitle">Book shop</Link>
                    <div className="singnInBody">
                        <div className="signInBodyTitle">Sign in</div>
                        <div className="signInBodyContent">
                            <div className="signInBodyEmail">
                                <div className="signInBodyEmailTitle">Email</div>
                                <Validation valid={this.state.valid} />
                                <input className="signInBodyEmailValue" onChange={(e) => this.emailChange(e)}/>
                            </div>
                            <div className="signInBodyPassphrase">
                                <div className="signInBodyPassphraseTitle">Passphrase</div>
                                <input className="signInBodyPassphraseValue"/>
                            </div>
                            <div className="signInButton">Sign in</div>
                            <div>
                                <div className="registerLabel">don't have an account?</div>
                                <Link to="/register" className="RegisterButton" state={{props: {cart: this.state.Cart}}}>Click here to register</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;