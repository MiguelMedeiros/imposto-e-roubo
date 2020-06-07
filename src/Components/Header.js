import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import { NavLink, useLocation } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    fontFamily: "Saira Stencil One",
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
  title: {
    flexGrow: 1,
    color: theme.palette.secondary.main,
    textShadow: "rgb(42, 42, 42) -5px 5px 0px",
    fontSize: 26,
    fontFamily: "Saira Stencil One",
    textTransform: "uppercase",
    textDecoration: "none",
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
  logo: {
    color: theme.palette.secondary.main,
    textDecoration: "none",
  },
}));

export default function Header() {
  const classes = useStyles();
  let location = useLocation();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <NavLink to="/" className={classes.logo}>
              Imposto é Roubo
            </NavLink>
          </Typography>
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
      </AppBar>
    </div>
  );
}
