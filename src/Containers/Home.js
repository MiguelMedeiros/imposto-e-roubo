import { Box, Container, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Modal from "@material-ui/core/Modal";

import Book from "./../Components/Book";
import Libertarian from "./../Components/Libertarian";
import News from "./../Components/News";
import books from "./../Data/Books";
import libertarians from "./../Data/Libertarians";

var _ = require("lodash");

const useStyles = makeStyles((theme) => ({
  root: {
    "& img": {
      width: "100%",
      transition: "50ms all",
      "&:hover": {
        transform: "scale(1.03)",
        boxShadow: "1px 1px 10px rgba(255,255,255,0.1)",
      },
    },
  },
  divider: {
    display: "block",
    height: 1,
    border: 0,
    borderTop: "1px solid #f0f0f0",
    margin: "40px auto",
    width: 125,
    padding: 0,
  },
  iframeContainer: {
    height: "400px",
    maxHeight: 720,
    display: "flex",
  },
  youtubeEmbed: {
    maxWidth: "100%",
    width: "100%",
    height: "100%",
  },
  modal: {
    top: "50%",
    left: 0,
    margin: "10px",
    width: "100%",
    transform: `translate(0%, -50%)`,
    [theme.breakpoints.up("sm")]: {
      transform: `translate(-50%, -50%)`,
      top: `50%`,
      left: `50%`,
      width: 600,
    },
    [theme.breakpoints.up("md")]: {
      width: 800,
    },
  },
  videoContainer: {
    transition: "all 100ms",
    "&:hover": {
      transform: "scale(1.04)",
    },
  },
  paper: {
    position: "absolute",
    backgroundColor: "#212121",
    boxShadow: theme.shadows[5],
    border: "none !important",
    color: "#f0f0f0",
    padding: theme.spacing(4),
    borderRadius: 4,
    outline: "none !important",
    "&:active": {
      outline: "none !important",
    },
  },
  titleLink: {
    textDecoration: "none",
    color: "#f0f0f0",
    "& h1": {
      "&:hover": {
        color: "#f3c011",
      },
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  const [modalBook, setModalBook] = useState(null);
  const [open, setOpen] = useState(false);
  const [shuffleBooks, setShuffleBooks] = useState([]);
  const [shuffleLibertarians, setShuffleLibertarians] = useState([]);

  useEffect(() => {
    let shuffleBooksTemp = _.shuffle(books);
    setShuffleBooks(_.slice(shuffleBooksTemp, 0, 6));

    let shuffleLibertariansTemp = _.shuffle(libertarians);
    setShuffleLibertarians(_.slice(shuffleLibertariansTemp, 0, 6));
  }, []);

  const handleOpen = (book) => {
    setModalBook(book);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box overflow="hidden" className={classes.root}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={`${classes.paper} ${classes.modal}`}>
          {modalBook && (
            <>
              <Typography
                variant="h2"
                style={{
                  marginBottom: 5,
                  fontSize: 20,
                  display: "block",
                  fontWeight: "bold",
                }}
              >
                {modalBook.bookTitle}
              </Typography>
              <Typography
                variant="caption"
                style={{
                  color: "#ccc",
                  marginBottom: 15,
                  display: "block",
                }}
              >
                {modalBook.bookAuthor}
              </Typography>
              <Button
                variant="contained"
                href={modalBook.link}
                style={{ margin: "5px auto 15px" }}
                color="secondary"
              >
                Comprar Livro
              </Button>
              <div className={classes.iframeContainer}>
                <iframe
                  title={modalBook.Title}
                  src={`https://www.youtube.com/embed/${modalBook.audio}?autoplay=1`}
                  height="90%"
                  width="100%"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </>
          )}
        </div>
      </Modal>
      <Container maxWidth="lg">
        <Grid container spacing={2} style={{ padding: "10px 0px 30px" }}>
          <Grid item xs={12} sm={12} md={8}>
            <NavLink to="/quiz">
              <img
                src="./img/banners/banner-imposto-roubo.png"
                alt="Quiz"
                style={{ marginTop: 2 }}
              />
            </NavLink>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Grid container>
              <Grid item xs={12} sm={4} md={12}>
                <a
                  href="https://www.bitcoinpricemap.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./img/banners/banner-bitcoinpricemap2.png"
                    alt="Bitcoin Price Map"
                    style={{ marginTop: 2 }}
                  />
                </a>
              </Grid>
              <Grid item xs={12} sm={4} md={12}>
                <a
                  href="https://www.bitcoinhodler.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./img/banners/banner-bitcoinhodler.png"
                    alt="Bitcoin Price Map"
                    style={{ marginTop: 2 }}
                  />
                </a>
              </Grid>
              <Grid item xs={12} sm={4} md={12}>
                <a
                  href="https://chrome.google.com/webstore/detail/vis%C3%A3o-libert%C3%A1ria/jnafjgekhpiipmhihkmoboggpclkdijl?hl=pt-BR"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./img/banners/banner-visaolibertaria2.png"
                    alt="Extensão Visão Libertária"
                    style={{ marginTop: 1 }}
                  />
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ padding: "10px 0px 30px" }}>
          <NavLink to={"/biblioteca"} className={classes.titleLink}>
            <Typography variant="h1">Biblioteca</Typography>
          </NavLink>
          <Grid container>
            {shuffleBooks.map((book, index) => {
              return (
                <Grid
                  item
                  xs={6}
                  sm={4}
                  md={2}
                  lg={2}
                  key={index}
                  style={{ padding: "10px 5px" }}
                  onClick={() => {
                    handleOpen(book);
                  }}
                >
                  <Book
                    key={index}
                    link={book.link}
                    image={book.image}
                    name={book.bookTitle}
                    author={book.bookAuthor}
                    filter={book.filter}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ padding: "10px 0px 30px" }}>
          <NavLink to={"/libertarios"} className={classes.titleLink}>
            <Typography variant="h1">Libertários</Typography>
          </NavLink>
          <Grid container>
            {shuffleLibertarians.map((person, index) => {
              return (
                <Grid item xs={6} sm={4} md={2} key={index}>
                  <Libertarian
                    key={index}
                    link={person.link}
                    image={person.image}
                    name={person.name}
                    filter={person.filter}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ padding: "10px 0px 30px" }}>
          <NavLink to={"/noticias"} className={classes.titleLink}>
            <Typography variant="h1">Notícias</Typography>
          </NavLink>
          <News />
        </Grid>
      </Container>
    </Box>
  );
}
