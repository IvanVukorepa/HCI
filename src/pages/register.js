import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout.js"

import '../style/signIn.css'


function EmailValidation(props){
    if(typeof props.email !== "string" || props.email.includes("@"))
        return null;
    return <div className="invalidEmail">Email not valid</div>

}

function PassphraseValidation(props){
    if(typeof props.passphrase !== "string" || props.passphrase.length > 6)
        return null;
    return <div className="invalidEmail">Passphrase not long enough</div>

}

function Passphrase2Validation(props){
    if(typeof props.passphrase !== "string" || typeof props.passphrase2 !== "string" || props.passphrase === props.passphrase2)
        return null;
    return <div className="invalidEmail">Passphrases do not match</div>

}

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: String,
            email: String,
            passphrase: String,
            passphrase2: String,
            account: {name: String,email: String, passphrase: String, passphrase2: String},
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

    registerClick = (e) => {
        if(this.state.name === "" || this.state.passphrase.length < 6 || this.state.passphrase !== this.state.passphrase2 || !this.state.email.includes("@")){
            e.preventDefault();
            alert("You did not enter the needed information");
        }
        localStorage.setItem("user", this.state.name);
    }

    render(){
        return(
            <div>
                <Layout cart={this.state.Cart} username={this.state.username} renderMenu={false}/>
                <div className="signInForm">
                    <Link to="/" className="signInTitle">Book shop</Link>
                    <div className="singnInBody">
                        <div className="signInBodyTitle">Register</div>
                        <div className="signInBodyContent">
                            <div className="signInBodyName">
                                <div className="signInBodyNameTitle">Name</div>
                                <input className="signInBodyNameValue" onChange={(e) => { this.setState({name: e.target.value }); }}/>
                            </div>
                            <div className="signInBodyEmail">
                                <div className="signInBodyEmailTitle">Email</div>
                                <EmailValidation email={this.state.email}/>
                                <input className="signInBodyEmailValue" onChange={(e) => { this.setState({email: e.target.value }); }}/>
                            </div>
                            <div className="signInBodyPassphrase">
                                <div className="signInBodyPassphraseTitle">Passphrase</div>
                                <PassphraseValidation passphrase={this.state.passphrase}/>
                                <input type="password" className="signInBodyPassphraseValue" onChange={(e) => { this.setState({passphrase: e.target.value }); }}/>
                            </div>
                            <div className="signInBodyPassphrase">
                                <div className="signInBodyPassphraseTitle">Re-enter passphrase</div>
                                <Passphrase2Validation passphrase={this.state.passphrase} passphrase2={this.state.passphrase2}/>
                                <input type="password" className="signInBodyPassphraseValue" onChange={(e) => { this.setState({passphrase2: e.target.value }); }}/>
                            </div>
                            <Link to="/" state={{props: {name: this.state.name, email: this.state.email, passphrase: this.state.passphrase}}} className="signInButton" onClick={(e) => this.registerClick(e)}>Register</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;