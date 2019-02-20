import React from "react"
import { Link } from "gatsby"

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
            valid: Boolean
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
                            <Link to="/register" className="RegisterButton">Click here to register</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;