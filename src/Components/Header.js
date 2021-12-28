import { Container } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React, { useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";

import { Tooltip } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";

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
  linkGithub: {
    marginLeft: 20,
    fontSize: 26,
    color: "#f0f0f0",
    display: "none",
    [theme.breakpoints.up(870)]: {
      display: "inline",
    },
  },
  logo: {
    color: theme.palette.secondary.main,
    textDecoration: "none",
    fontSize: 19,
    fontFamily: "Saira Stencil One",
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
    color: "#212121",
    display: "block",
    width: "150px",
  },
}));

export default function Header() {
  const classes = useStyles();
  let location = useLocation();
  const [open, setOpen] = useState(false);
  // const [anchorEl, setAnchorEl] = useState(null);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
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
              ref={anchorRef}
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleToggle}
              className={classes.menuMobile}
            >
              <MoreVertIcon />
            </IconButton>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="menu-list-grow"
                        onKeyDown={handleListKeyDown}
                      >
                        <NavLink
                          to="/quiz"
                          onClick={handleToggle}
                          className={classes.menuMobileItem}
                        >
                          <MenuItem selected={location.pathname === "/quiz"}>
                            Quiz
                          </MenuItem>
                        </NavLink>
                        <NavLink
                          to="/noticias"
                          onClick={handleToggle}
                          className={classes.menuMobileItem}
                        >
                          <MenuItem
                            selected={location.pathname === "/noticias"}
                          >
                            Notícias
                          </MenuItem>
                        </NavLink>
                        <NavLink
                          to="/biblioteca"
                          onClick={handleToggle}
                          className={classes.menuMobileItem}
                        >
                          <MenuItem
                            selected={location.pathname === "/biblioteca"}
                          >
                            Biblioteca
                          </MenuItem>
                        </NavLink>
                        <NavLink
                          to="/libertarios"
                          onClick={handleToggle}
                          className={classes.menuMobileItem}
                        >
                          <MenuItem
                            selected={location.pathname === "/libertarios"}
                          >
                            Libertários
                          </MenuItem>
                        </NavLink>
                        <NavLink
                          to="/sobre"
                          onClick={handleToggle}
                          className={classes.menuMobileItem}
                        >
                          <MenuItem selected={location.pathname === "/sobre"}>
                            Sobre
                          </MenuItem>
                        </NavLink>
                        <NavLink
                          to="/apoie"
                          onClick={handleToggle}
                          className={classes.menuMobileItem}
                        >
                          <MenuItem selected={location.pathname === "/apoie"}>
                            Apoie
                          </MenuItem>
                        </NavLink>
                        <a
                          href="https://discord.bitcoinheiros.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={classes.menuMobileItem}
                        >
                          <MenuItem>Discord</MenuItem>
                        </a>
                        <a
                          href="https://github.com/MiguelMedeiros/imposto-e-roubo"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={classes.menuMobileItem}
                        >
                          <MenuItem>Github</MenuItem>
                        </a>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
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
              to="/biblioteca"
              className={
                location.pathname === "/biblioteca"
                  ? `${classes.activeButton}`
                  : `${classes.menuButton}`
              }
            >
              <Button color="inherit">Biblioteca</Button>
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
              to="/apoie"
              className={
                location.pathname === "/apoie"
                  ? `${classes.activeButton}`
                  : `${classes.menuButton}`
              }
            >
              <Button color="inherit">apoie</Button>
            </NavLink>
            <Tooltip title="The Bitcoin Discord" aria-label="Discord">
              <a
                href="https://github.com/MiguelMedeiros/imposto-e-roubo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className={classes.linkGithub}
                  icon={faDiscord}
                />
              </a>
            </Tooltip>
            <Tooltip title="Repositório no Github" aria-label="Github">
              <a
                href="https://github.com/MiguelMedeiros/imposto-e-roubo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className={classes.linkGithub}
                  icon={faGithub}
                />
              </a>
            </Tooltip>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
