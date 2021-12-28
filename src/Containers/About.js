import {
  faFacebook,
  faGithub,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import { Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import GitHubButton from "react-github-btn";
import QRCode from 'qrcode.react';

const useStyles = makeStyles((theme) => ({
  avatarContainer: {
    fontFamily: "Roboto !important",
    fontWeight: 500,
  },
  divider: {
    display: "block",
    height: 1,
    border: 0,
    borderTop: "1px solid #f0f0f0",
    margin: "70px auto",
    width: 125,
    padding: 0,
  },
  icon: {
    fontSize: 30,
    margin: "5px 10px",
    transition: "100ms all",
    "&:hover": {
      transform: "scale(1.3)",
      color: "#212121",
    },
  },
  link: {
    fontWeight: "bold",
  },
  linksGithub: {
    textAlign: "center",
    fontFamily: "Roboto !important",
    "& span": {
      display: "inline-block",
      margin: "10px 2px 0px",
    },
  },
  list: {
    textAlign: "center",
    listStyle: "none",
    padding: 0,
    "& li": {
      display: "inline-block",
      margin: "20px 10px 20px",
    },
  },
  imgAuthor: {
    marginTop: 50,
    borderRadius: "50%",
    margin: "auto",
    width: "100%",
    maxWidth: 225,
    display: "block",
    [theme.breakpoints.up("sm")]: {
      marginTop: 5,
    },
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Grid container justify="center" alignItems="center">
        <Grid item className={classes.avatarContainer} xs={12}>
          <Typography variant="h1">O Projeto</Typography>
          <Typography paragraph>
            Provavelmente você já ouvir essa pergunta: imposto é roubo?
          </Typography>
          <Typography paragraph>
            Para te ajudar com a resposta, desenvolvi esse site como forma de
            conscientização de todos nós - pagadores de impostos.
          </Typography>
          <Typography paragraph>
            Para isso fiz um quiz, uma coletânea de canais libertários e de
            livros. Fora a integração com o site Visão Libertária para ter
            notícias sempre quentinhas sob a ótica libertária.
          </Typography>
          <Box style={{ marginTop: 30 }}>
            <Typography variant="h3">Contribua com código</Typography>
            <Typography paragraph>
              Se você quiser ajudar na programação, segue os links do
              repositório no Github:
            </Typography>
          </Box>
          <div className={classes.linksGithub}>
            <GitHubButton
              href="https://github.com/MiguelMedeiros/imposto-e-roubo"
              data-size="large"
              data-show-count="true"
              aria-label="Star MiguelMedeiros/imposto-e-roubo on GitHub"
            >
              Star
            </GitHubButton>
            <GitHubButton
              href="https://github.com/MiguelMedeiros/imposto-e-roubo/fork"
              data-size="large"
              data-show-count="true"
              aria-label="Fork MiguelMedeiros/imposto-e-roubo on GitHub"
            >
              Fork
            </GitHubButton>
          </div>
        </Grid>

        <Grid
          item
          className={classes.avatarContainer}
          xs={12}
          style={{
            borderRadius: 8,
            textAlign: "center",
          }}
        >
          <hr className={classes.divider} />
          <Typography variant="h2">Faça uma doação!</Typography>
          <Typography paragraph>
            Doe alguns Satoshis para ajudar a manter o projeto online:
          </Typography>
          <div>
            <div
            style={{
              background: "#fff",
              margin: "0 auto",
              display: "inline-block",
              padding: '10px 10px 5px 10px',
              borderRadius: 10
            }}>
              <QRCode value="bc1qvyw5kfx0uhu7g5qeahzna8tl9c5jsuemjumxzj" />
            </div>
            <p>bc1qvyw5kfx0uhu7g5qeahzna8tl9c5jsuemjumxzj</p>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
