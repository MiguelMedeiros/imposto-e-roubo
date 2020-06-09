import { Box, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { NavLink } from "react-router-dom";

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
}));

export default function Home() {
  const classes = useStyles();

  const shuffleBooks = _.shuffle(books);
  const slicedBooks = _.slice(shuffleBooks, 0, 4);

  const shuffleLibertarians = _.shuffle(libertarians);
  const slicedLibertarians = _.slice(shuffleLibertarians, 0, 6);

  return (
    <Box overflow="hidden" className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={2} style={{ padding: "10px 30px 30px" }}>
          <Grid item xs={12} sm={12} md={8}>
            <NavLink to="/quiz">
              <img src="./img/banner-imposto-roubo.png" alt="Quiz" />
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
                    src="./img/banner-bitcoinpricemap2.png"
                    alt="Bitcoin Price Map"
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
                    src="./img/banner-bitcoinhodler.png"
                    alt="Bitcoin Price Map"
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
                    src="./img/banner-visaolibertaria2.png"
                    alt="Extensão Visão Libertária"
                  />
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ padding: "10px 30px 30px" }}>
          <Typography variant="h1">Biblioteca</Typography>
          <Grid container>
            {slicedBooks.map((book, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  key={index}
                  style={{ padding: "10px 5px" }}
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
        <Grid item xs={12} style={{ padding: "10px 30px 30px" }}>
          <Typography variant="h1">Libertários</Typography>
          <Grid container>
            {slicedLibertarians.map((person, index) => {
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
        <Grid item xs={12} style={{ padding: "10px 30px 30px" }}>
          <Typography variant="h1">Notícias</Typography>
          <News />
        </Grid>
      </Container>
    </Box>
  );
}
