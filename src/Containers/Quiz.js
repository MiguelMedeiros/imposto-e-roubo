import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import ReactGA from "react-ga";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    textAlign: "center",
  },
  stage: {
    "& h1": {
      margin: "40px auto",
    },
  },
  buttonsContainer: {
    margin: "10px",
  },
  button: {
    margin: "20px 10px",
    minWidth: 125,
  },
  iframeContainer: {
    height: "57vh",
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    maxWidth: 700,
    width: "100%",
    borderRadius: 8,
  },
}));

export default function Quiz() {
  const classes = useStyles();
  const [stage, setStage] = useState(0);

  const handleChangeStage = (stage) => {
    setStage(stage);
    ReactGA.event({
      category: "Stage",
      action: "Stage: " + stage,
      label: "Stage: " + stage,
    });
  };

  return (
    <Container className={classes.main} maxWidth="md">
      {stage === 0 && (
        <div className={classes.stage}>
          <Typography variant="h1">Mas afinal: imposto é roubo?</Typography>
          <img
            src="/img/quiz/batman.gif"
            alt="Pare para pensar você acha que imposto é roubo?"
            className={classes.image}
          />
          <div className={classes.buttonsContainer}>
            <Button
              onClick={() => {
                handleChangeStage(1);
              }}
              variant="contained"
              className={classes.button}
              color="secondary"
              size="large"
            >
              Clique aqui para descobrir
            </Button>
          </div>
        </div>
      )}
      {stage === 1 && (
        <div className={classes.stage}>
          <Typography variant="h1">Você paga por que quer?</Typography>
          <img
            src="/img/quiz/breakingbad.gif"
            alt="Você paga por que quer?"
            className={classes.image}
          />
          <div className={classes.buttonsContainer}>
            <Button
              onClick={() => {
                handleChangeStage(2);
              }}
              variant="contained"
              className={classes.button}
              color="secondary"
              size="large"
            >
              Sim
            </Button>
            <Button
              onClick={() => {
                handleChangeStage(5);
              }}
              variant="contained"
              className={classes.button}
              color="secondary"
              size="large"
            >
              Não
            </Button>
          </div>
        </div>
      )}
      {stage === 2 && (
        <div className={classes.stage}>
          <Typography variant="h1">
            Você pode deixar de pagar por algum motivo?
          </Typography>
          <img
            src="/img/quiz/cat.gif"
            alt="Você pode deixar de pagar por algum motivo?"
            className={classes.image}
          />
          <div className={classes.buttonsContainer}>
            <Button
              onClick={() => {
                handleChangeStage(3);
              }}
              variant="contained"
              className={classes.button}
              color="secondary"
              size="large"
            >
              Sim
            </Button>
            <Button
              onClick={() => {
                handleChangeStage(5);
              }}
              variant="contained"
              className={classes.button}
              color="secondary"
              size="large"
            >
              Não
            </Button>
          </div>
        </div>
      )}
      {stage === 3 && (
        <div className={classes.stage}>
          <Typography variant="h1">
            Você vai preso se deixar de pagar ou perderá algum bem adquirido com
            seu trabalho?
          </Typography>
          <img
            src="/img/quiz/jail.gif"
            alt="Você vai preso se deixar de pagar ou perderá algum bem adquirido
              com seu trabalho?"
            className={classes.image}
          />
          <div className={classes.buttonsContainer}>
            <Button
              onClick={() => {
                handleChangeStage(5);
              }}
              variant="contained"
              className={classes.button}
              color="secondary"
              size="large"
            >
              Sim
            </Button>
            <Button
              onClick={() => {
                handleChangeStage(4);
              }}
              variant="contained"
              className={classes.button}
              color="secondary"
              size="large"
            >
              Não
            </Button>
          </div>
        </div>
      )}
      {stage === 4 && (
        <div className={classes.stage}>
          <Typography variant="h1">
            Mas e a lei Nº 4729 que está em vigor desde 14/07/1965?
          </Typography>
          <a
            href="http://www.planalto.gov.br/ccivil_03/leis/1950-1969/L4729.htm"
            rel="noopener noreferrer"
            target="_blank"
            className="navlink"
          >
            <img
              src="/img/quiz/lei-4729.jpg"
              alt="Mas e a lei Nº 4729 que está em vigor desde 14/07/1965?"
              className={classes.image}
            />
          </a>
          <div className={classes.buttonsContainer}>
            <Button
              onClick={() => {
                handleChangeStage(3);
              }}
              variant="contained"
              className={classes.button}
              color="secondary"
              size="large"
            >
              Tente novamente.
            </Button>
          </div>
        </div>
      )}
      {stage === 5 && (
        <div className={classes.stage}>
          <Typography variant="h1">Sim, imposto é roubo.</Typography>
          <div className={classes.iframeContainer}>
            <iframe
              title="Imposto é roubo"
              height="100%"
              width="100%"
              frameBorder="0"
              src="https://www.youtube.com/embed/XsbmavLkAwI?autoplay=1"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className={classes.buttonsContainer}>
            <NavLink to="/visao-libertaria" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                className={classes.button}
                color="secondary"
                size="large"
              >
                Notícias
              </Button>
            </NavLink>
            <NavLink to="/libertarios" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                className={classes.button}
                color="secondary"
                size="large"
              >
                Libertários
              </Button>
            </NavLink>
            <NavLink to="/biblioteca" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                className={classes.button}
                color="secondary"
                size="large"
              >
                Biblioteca
              </Button>
            </NavLink>
            <Button
              variant="contained"
              className={classes.button}
              color="primary"
              size="large"
              onClick={() => {
                handleChangeStage(0);
              }}
            >
              Voltar
            </Button>
          </div>
        </div>
      )}
    </Container>
  );
}
