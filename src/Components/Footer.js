import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";

class Footer extends Component {
  render() {
    return (
      <AppBar
        position="static"
        className="navbar navbar-bottom"
        color="primary"
      >
        <Toolbar>
          <a
            href="https://www.impostoeroubo.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="navlink"
          >
            <b>imposto</b>e<b>roubo</b>.com
          </a>
          <div className="grow" />
          <a
            href="https://www.miguelmedeiros.com.br/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Avatar
              alt="Remy Sharp"
              src="/img/miguelmedeiros.jpg"
              className="avatar-image"
            />
          </a>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Footer;
