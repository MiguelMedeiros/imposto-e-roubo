import React from "react";
import { Grid, Container, Typography, Box } from "@material-ui/core";
import { Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import GitHubButton from "react-github-btn";
import {
  faYoutube,
  faTwitter,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles((theme) => ({
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
    width: "225px",
    marginTop: 50,
    borderRadius: "50%",
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
        <Grid item className="avatar-container" xs={12}>
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
              href="https://github.com/MiguelMedeiros/imposto-e-roubo/fork"
              data-size="large"
              data-show-count="true"
              aria-label="Fork MiguelMedeiros/imposto-e-roubo on GitHub"
            >
              Fork
            </GitHubButton>
            <GitHubButton
              href="https://github.com/MiguelMedeiros/imposto-e-roubo"
              data-size="large"
              data-show-count="true"
              aria-label="Star MiguelMedeiros/imposto-e-roubo on GitHub"
            >
              Star
            </GitHubButton>
          </div>
          <hr className={classes.divider} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h2">O Criador</Typography>
          <Typography paragraph>
            Meu nome é Miguel Medeiros, sou desenvolvedor web e libertário
            anarcocapitalista.
          </Typography>
          <Typography paragraph>
            Se quiser entrar em contato dá uma olhada nos links abaixo:
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.authorLinks}>
          <img
            src="./img/libertarians/miguelmedeiros.jpg"
            alt="Miguel Medeiros"
            className={classes.imgAuthor}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <ul className={classes.list}>
            <li>
              <Tooltip title="@_miguelmedeiros" aria-label="@_miguelmedeiros">
                <a
                  href="https://www.miguelmedeiros.com.br"
                  target="_blank"
                  className={classes.link}
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className={classes.icon}
                    style={{ color: "#f3c011" }}
                    icon={faLink}
                  />
                </a>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Youtube" aria-label="Youtube">
                <a
                  href="https://www.youtube.com/channel/UCyF0x2hyYIQxw8Km2O3ltGg"
                  target="_blank"
                  className={classes.link}
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className={classes.icon}
                    style={{ color: "#f00" }}
                    icon={faYoutube}
                  />
                </a>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Twitter" aria-label="Twitter">
                <a
                  href="https://twitter.com/_miguelmedeiros"
                  target="_blank"
                  className={classes.link}
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className={classes.icon}
                    style={{ color: "#1da1f2" }}
                    icon={faTwitter}
                  />
                </a>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Github" aria-label="Github">
                <a
                  href="https://github.com/MiguelMedeiros"
                  target="_blank"
                  className={classes.link}
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className={classes.icon}
                    style={{ color: "#f0f0f0" }}
                    icon={faGithub}
                  />
                </a>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Facebook" aria-label="Facebook">
                <a
                  href="https://www.facebook.com/miguelmedeirosweb/"
                  target="_blank"
                  className={classes.link}
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className={classes.icon}
                    style={{ color: "#4267b2" }}
                    icon={faFacebook}
                  />
                </a>
              </Tooltip>
            </li>
          </ul>
        </Grid>

        <Grid
          item
          className="avatar-container"
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
          <div
            style={{
              diplay: "block",
              textAlign: "center",
              margin: "50px auto 20px",
            }}
          >
            <img
              src="/img/donation.png"
              alt="Doe Bitcoins"
              style={{
                borderRadius: 8,
              }}
            />
            <p>18kXMmrDtgfeQgVmwfmygTaYLyQuVS4chK</p>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
