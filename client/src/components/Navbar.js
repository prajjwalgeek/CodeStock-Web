import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../redux/actions/authActions';
import { Tooltip } from 'antd';

import classNames from 'classnames';


import PropTypes from "prop-types";

class Navbar extends React.Component {

    state = {
        open: false
    }

    toggleNav = () => {
        this.setState(prevState => {
            return {
                open: !prevState.open
            }
        })
    }
    logoutHandler = () => {
        this.props.logoutUser();
    }
    render() {
        const url = window.location.href.split('/');
        const active = url.pop();
        return (
            <div className="navbar">
                <div className="nav-logo">
                    <Link to="/">CODESTOCK</Link>
                </div>
                {this.props.isAuthenticated ? (
                    <p id="welcome">Welcome, {this.props.firstName}</p>
                ) : null}
                <Tooltip placement="bottom" title={this.state.open ? "Close" : "Menu"} color="#000000">
                    <div className={classNames("nav-toggler-wrapper", {
                        "cross": this.state.open
                    })} onClick={this.toggleNav}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </Tooltip>
                <div className={classNames('nav-items', {
                    'nav-open': this.state.open
                })}>
                    <Link to="/" className={classNames({
                        "active": active === ''
                    })}>Home</Link>
                    <Link to="/code"
                        className={classNames({
                            "active": active === 'code'
                        })}
                    >Code</Link>
                    {this.props.isAuthenticated ? (
                        <Link to="/" onClick={this.logoutHandler}
                            className={classNames({
                                "active": active === 'logout'
                            })}
                        >Logout</Link>
                    ) : (
                            <>
                                <Link to="/login"
                                    className={classNames({
                                        "active": active === 'login'
                                    })}
                                >Login</Link>
                                <Link to="/register"
                                    className={classNames({
                                        "active": active === 'register'
                                    })}
                                >Signup</Link>
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
