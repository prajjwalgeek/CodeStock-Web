import React from 'react'
// import { Switch } from 'antd';
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

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
    render() {
        return (
            <div className="navbar">
                <div className="nav-logo">
                    <Link to="/">CODESTOCK</Link>
                </div>
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
                    <Link to="/Login">Login</Link>
                    <Link to="/register">Signup</Link>
                </div>
            </div>
        )
    }
}

export default Navbar
