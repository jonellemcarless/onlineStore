import React, { Component } from "react";
class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Join</b> us today!{" "}
              <span style={{ fontFamily: "Simplifica" }}>naturalBeauty</span> you can trust.
            </h4>
            <p className="flow-text grey-text text-darken-1">
            Join our exclusive VIP only beauty insider club for for exclusive access to our products curated by top dermotologists. 
            </p>
            <br />
            <a
              
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect waves-light hoverable light-green darken-4"
              href="/register" onClick={this.handleClick}>
              Register
            </a>
            <a
              style={{
                marginLeft: "2rem",
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect white hoverable black-text"
              href="/login" onClick={this.handleClick}>
              Log In
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;