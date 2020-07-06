import React from 'react'
import Navbar from '../components/Navbar';
import { Link, withRouter } from 'react-router-dom';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../redux/actions/authActions";

import Footer from '../components/Footer';
import Button from '../components/elements/Button';
import Input from '../components/elements/Input';



import { BsCodeSlash } from "react-icons/bs";


class Register extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
        errors: {}
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.errors) {
    //         this.setState({
    //             errors: nextProps.errors
    //         });
    //     }
    // }

    static getDerivedStateFromProps(props, state) {
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
        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.registerUser(newUser, this.props.history);
    }

    render() {
        const { errors } = this.state;
        return (
            <>
                <Navbar />
                <div className="login-page">
                    <div className="login-form-wrapper">
                        <div className="login-form">
                            <form onSubmit={this.handleSubmit}>
                                <Button width="80%" color="#000000" bg="#FAF2F2" outlined>
                                    Signup with Google
                                </Button>
                                <p>or</p>
                                <div className="name-block">
                                    <Input
                                        placeholder="First Name"
                                        label="First Name"
                                        id="firstName"
                                        value={this.state.firstName}
                                        onChangeHandler={this.onInputChange}
                                        error={errors.firstName}
                                    />
                                    <Input
                                        placeholder="Last Name"
                                        label="Last Name"
                                        id="lastName"
                                        value={this.state.lastName}
                                        onChangeHandler={this.onInputChange}
                                        error={errors.lastName}
                                    />
                                </div>
                                <Input
                                    type="text"
                                    placeholder="Enter your email"
                                    label="Email"
                                    id="email"
                                    value={this.state.email}
                                    onChangeHandler={this.onInputChange}
                                    error={errors.email}
                                />
                                <div className="name-block">
                                    <Input
                                        type="password"
                                        placeholder="Password"
                                        label="Password"
                                        id="password"
                                        value={this.state.password}
                                        onChangeHandler={this.onInputChange}
                                        error={errors.password}
                                    />
                                    <Input
                                        type="password"
                                        placeholder="Confirm Password"
                                        label="Confirm Password"
                                        id="password2"
                                        value={this.state.password2}
                                        onChangeHandler={this.onInputChange}
                                        error={errors.password2}
                                    />
                                </div>
                                <Button outlined width="80%">
                                    Sign Up
                                </Button>
                                <div className="signup-option">
                                    <p>Already have an account?<Link to="/login"> Log in</Link></p>
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

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));

