import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/elements/Button';
import Input from '../components/elements/Input';

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { loginUser } from "../redux/actions/authActions";

import { Link } from 'react-router-dom';


import { BsCodeSlash } from "react-icons/bs";
import Particle from '../components/elements/Particles';

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        errors: {}
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.auth.isAuthenticated) {
    //         this.props.history.push("/");
    //     }
    //     if (nextProps.errors) {
    //         this.setState({
    //             errors: nextProps.errors
    //         });
    //     }
    // }
    static getDerivedStateFromProps(props, state) {
        if (props.auth.isAuthenticated) {
            props.history.push("/");
            return null;
        }
        if (props.errors) {
            return {
                errors: props.errors
            }
        }
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(userData);
        this.props.loginUser(userData);
    }

    render() {
        const { errors } = this.state;
        return (
            <>
                <Navbar />
                <div className="login-page">
                    <div className="login-form-wrapper">
                        <Particle />
                        <div className="login-form">
                            <form onSubmit={this.handleSubmit}>
                                <Button width="80%" color="#000000" bg="#FAF2F2" outlined>
                                    Login with Google
                                </Button>
                                <p>or</p>
                                <Input
                                    type="text"
                                    placeholder="Enter your email"
                                    label="Email"
                                    id="email"
                                    value={this.state.email}
                                    onChangeHandler={this.onInputChange}
                                    error={errors.email}
                                />
                                <Input
                                    type="password"
                                    placeholder="Password"
                                    label="Password"
                                    id="password"
                                    value={this.state.password}
                                    onChangeHandler={this.onInputChange}
                                    error={errors.password}
                                />

                                <div className="checkbox-group">
                                    <input type="checkbox" />
                                    <small>Remember me</small>
                                    <a href="#!">Forgot Password?</a>
                                </div>
                                <Button outlined width="80%">
                                    Log in
                                </Button>
                                <div className="signup-option">
                                    <p>Don't have an account?<Link to="/register">Sign Up</Link></p>
                                </div>
                            </form>
                        </div>
                        <div className="login-page-data">
                            <BsCodeSlash size={200} color="#000000" />
                            <h1>CODESTOCK</h1>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }

}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { loginUser }
)(Login);