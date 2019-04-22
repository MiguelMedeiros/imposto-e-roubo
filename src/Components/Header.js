import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faQuestion,
  faInfo,
  faHandHoldingUsd,
} from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  state = {
    anchorEl: null,
  };
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <AppBar position="static" className="navbar" color="secondary">
        <Toolbar>
          <div className="logo">
            <NavLink to={"/"} className="navlink">
              Imposto é roubo?
            </NavLink>
          </div>
          <div className="grow" />

          <div>
            <IconButton
              aria-owns={open ? "menu-appbar" : undefined}
              aria-haspopup="true"
              onClick={this.handleMenu}
              color="inherit"
              className="menu-button"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>
                <NavLink to={"/"} className="navlink">
                  <FontAwesomeIcon className="fa-icon" icon={faQuestion} />{" "}
                  Imposto é roubo?
                </NavLink>
              </MenuItem>
              <MenuItem onClick={this.handleClose}>
                <NavLink to={"/sobre"} className="navlink">
                  <FontAwesomeIcon className="fa-icon" icon={faInfo} />
                  Porque esse site existe?
                </NavLink>
              </MenuItem>
              <MenuItem onClick={this.handleClose}>
                <NavLink to={"/libertarios"} className="navlink">
                  <FontAwesomeIcon className="fa-icon" icon={faYoutube} />
                  Conheça canais Libertários.
                </NavLink>
              </MenuItem>
              <MenuItem onClick={this.handleClose}>
                <NavLink to={"/contribua"} className="navlink">
                  <FontAwesomeIcon
                    className="fa-icon"
                    icon={faHandHoldingUsd}
                  />
                  Faça uma doação!
                </NavLink>
              </MenuItem>
              <MenuItem onClick={this.handleClose}>
                <a
                  href="https://github.com/MiguelMedeiros/imposto-e-roubo"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="navlink"
                >
                  <FontAwesomeIcon className="fa-icon" icon={faGithub} />
                  Repositório no Github.
                </a>
              </MenuItem>
              <MenuItem onClick={this.handleClose}>
                <a
                  href="https://www.miguelmedeiros.com.br/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="navlink"
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="/img/miguelmedeiros.jpg"
                    className="avatar-image-header"
                  />
                  Quem criou o site?
                </a>
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
