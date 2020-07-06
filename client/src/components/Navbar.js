import React from 'react'
// import { Switch } from 'antd';
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { connect } from 'react-redux';
import { logoutUser } from '../redux/actions/authActions';


import PropTypes from "prop-types";

class Navbar extends React.Component {

    state = {
        open: false
    }
    componentDidMount() {
        if (this.state.open) {
            document.querySelector('.nav-items').classList.add('nav-open')
        } else {
            document.querySelector('.nav-items').classList.remove('nav-open')
        }
    }

    toggleNav = () => {
        this.setState({
            open: !this.state.open
        })
        document.querySelector('.nav-items').classList.toggle('nav-open')

    }
    logoutHandler = () => {
        document.querySelector('.nav-items').classList.remove('nav-open');
        this.props.logoutUser();
    }
    render() {
        return (
            <div className="navbar">
                <div className="nav-logo">
                    <Link to="/">CODESTOCK</Link>
                </div>
                {this.props.isAuthenticated ? (
                    <p id="welcome">Welcome, {this.props.firstName}</p>
                ) : null}
                <div className="nav-toggler-wrapper">
                    {!this.state.open ? (
                        <FiMenu size={24} color="#000000" onClick={this.toggleNav} />
                    ) : (
                            <AiOutlineClose size={24} color="#FAF2F2" onClick={this.toggleNav} />
                        )}
                </div>
                <div className="nav-items">
                    <Link to="/" className="active">Home</Link>
                    <Link to="/code">Code</Link>
                    {this.props.isAuthenticated ? (
                        <Link to="/" onClick={this.logoutHandler}>Logout</Link>
                        // <p>hello</p>
                    ) : (
                            <>
                                <Link to="/Login">Login</Link>
                                <Link to="/register">Signup</Link>
                            </>
                        )
                    }
                </div>
            </div >
        )
    }
}

Navbar.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    firstName: PropTypes.string
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    firstName: state.auth.user.firstName
})

export default connect(mapStateToProps, { logoutUser })(Navbar);
