import { Container } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    textTransform: "uppercase",
    color: "#f9f9f9",
    margin: "0px 4px",
    textAlign: "center",
    display: "none",
    textDecoration: "none",
    "&:hover": {
      color: "#f3c011",
    },
    [theme.breakpoints.up(870)]: {
      display: "inline",
    },
  },
  activeButton: {
    color: theme.palette.secondary.main,
    textDecoration: "none",
    margin: "0px 4px",
    display: "none",
    [theme.breakpoints.up(870)]: {
      display: "inline",
    },
  },
  title: {
    flexGrow: 1,
    color: theme.palette.secondary.main,
    textShadow: "rgb(42, 42, 42) -5px 5px 0px",
    textTransform: "uppercase",
    textDecoration: "none",
  },
  logo: {
    color: theme.palette.secondary.main,
    textDecoration: "none",
    fontSize: 22,
    fontFamily: "Saira Stencil One",
    [theme.breakpoints.up(600)]: {
      fontSize: 26,
    },
  },
  menuMobile: {
    display: "inline",
    color: "#fff",
    [theme.breakpoints.up(870)]: {
      display: "none",
    },
  },
  menuMobileItem: {
    textDecoration: "none",
    textTransform: "uppercase",
    color: "#212121",
  },
}));

export default function Header() {
  const classes = useStyles();
  let location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Container maxWidth="lg" style={{ padding: "0px 5px" }}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <NavLink to="/" className={classes.logo}>
                Imposto é Roubo
              </NavLink>
            </Typography>

            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
              className={classes.menuMobile}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <NavLink to="/sobre" className={classes.menuMobileItem}>
                <MenuItem selected={location.pathname === "/sobre"}>
                  Sobre
                </MenuItem>
              </NavLink>
              <NavLink to="/quiz" className={classes.menuMobileItem}>
                <MenuItem selected={location.pathname === "/quiz"}>
                  Quiz
                </MenuItem>
              </NavLink>

              <NavLink to="/noticias" className={classes.menuMobileItem}>
                <MenuItem selected={location.pathname === "/noticias"}>
                  Notícias
                </MenuItem>
              </NavLink>
              <NavLink to="/libertarios" className={classes.menuMobileItem}>
                <MenuItem selected={location.pathname === "/libertarios"}>
                  Libertários
                </MenuItem>
              </NavLink>
              <NavLink to="/biblioteca" className={classes.menuMobileItem}>
                <MenuItem selected={location.pathname === "/biblioteca"}>
                  Biblioteca
                </MenuItem>
              </NavLink>
            </Menu>
            <NavLink
              to="/sobre"
              className={
                location.pathname === "/sobre"
                  ? `${classes.activeButton}`
                  : `${classes.menuButton}`
              }
            >
              <Button color="inherit">Sobre</Button>
            </NavLink>
            <NavLink
              to="/quiz"
              className={
                location.pathname === "/quiz"
                  ? `${classes.activeButton}`
                  : `${classes.menuButton}`
              }
            >
              <Button color="inherit">Quiz</Button>
            </NavLink>
            <NavLink
              to="/noticias"
              className={
                location.pathname === "/noticias"
                  ? `${classes.activeButton}`
                  : `${classes.menuButton}`
              }
            >
              <Button color="inherit">Notícias</Button>
            </NavLink>
            <NavLink
              to="/libertarios"
              className={
                location.pathname === "/libertarios"
                  ? `${classes.activeButton}`
                  : `${classes.menuButton}`
              }
            >
              <Button color="inherit">Libertários</Button>
            </NavLink>
            <NavLink
              to="/biblioteca"
              className={
                location.pathname === "/biblioteca"
                  ? `${classes.activeButton}`
                  : `${classes.menuButton}`
              }
            >
              <Button color="inherit">Biblioteca</Button>
            </NavLink>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
