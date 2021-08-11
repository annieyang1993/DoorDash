import React from 'react';
import FooterContainer from './../footer/footerAbsolute';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul className="errors">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div>
            <div className="login-form-container">
                <h1><img className="logo-blue" src="/logo-blue.png" /></h1>
                <div className="topLine"></div>
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className = "signInText">Sign Up</div>
                    <br /><div className= "test">
                            Already have an account? {this.props.navLink}</div>
                    {this.renderErrors()}
                    <div className="login-form">
                        <br />
                            <label>Username: <br />
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                            <br /> <br />
                        <label>Password: <br/>
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                            </label> <br /> 
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
                
            </div>
                <FooterContainer />
            </div>
        );
    }
}

export default LoginForm;
