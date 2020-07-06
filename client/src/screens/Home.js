import React from 'react'

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import PropTypes from "prop-types";

import Button from '../components/elements/Button';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home(props) {
    return (
        <React.Fragment>
            <Navbar />
            <div className="home-page">
                <div className="home-page-txt">
                    <h1>Welcome to <span id="hover-up">CodeStock</span></h1>
                    <p>Write code | Share code | Learn code</p>
                </div>
                <div className="home-page-cta">
                    <Button width="150px" outlined>
                        {props.isAuthenticated ? (
                            <Link to="/register">Go to Profile</Link>
                        ) : (
                                <Link to="/register">Join Us</Link>
                            )}
                    </Button>
                    <Button width="150px" color="#000000" bg="#FAF2F2" outlined>
                        <Link to="/code">Code Now</Link>
                    </Button>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
Home.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Home);
