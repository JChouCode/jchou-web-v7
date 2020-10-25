import React from "react"
import { Link, Router } from 'components/Router'
import { NavLink } from 'react-router-dom';
// import "./css/header.css"

export class Header extends React.Component {

  activeStyle = { borderBottom: '2px solid #1C1D1E' };

  constructor(props) {
    super(props);
    this.state = {
      active: "Home"
    };
    this.setActive = this.setActive.bind(this);
  }

  setActive(item) {
    this.setState({ active: item });
  }

  render() {
    return (
      <div className="header-wrapper">
        <Link to="/" className="logo">
          <img alt="logo" src={require("./../assets/logo.png")}></img>
          <div>Chou</div>
        </Link>
        <nav id="navbar">
          <Link to="/" style={this.state.active === "Home" ? this.activeStyle : {}}
            onClick={() => this.setActive("Home")}>Home</Link>
          <Link to="/about" style={this.state.active === "About" ? this.activeStyle : {}}
            onClick={() => this.setActive("About")}>About</Link>
          <Link to="/experience" style={this.state.active === "Work" ? this.activeStyle : {}}
            onClick={() => this.setActive("Work")}>Work</Link>
          <Link to="/blog" style={this.state.active === "Blog" ? this.activeStyle : {}}
            onClick={() => this.setActive("Blog")}>Blog</Link>
          <Link to="/contact" style={this.state.active === "Contact" ? this.activeStyle : {}}
            onClick={() => this.setActive("Contact")}>Contact</Link>
        </nav>
      </div>
    )
  }
}
