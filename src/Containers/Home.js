import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
} from "react-share";
class Home extends Component {
  state = {
    stage: 0,
  };

  handleChangeStage = stage => event => {
    this.setState({ stage: stage });
  };

  render() {
    const { stage } = this.state;
    const shareUrl = "https://www.impostoeroubo.com";
    const title = "Imposto é roubo? Entra aqui e descubra! #impostoÉroubo";

    return (
      <div className="app">
        {stage === 0 && (
          <div className="stage">
            <div className="question">Imposto é roubo?</div>
            <img
              src="/img/batman.gif"
              alt="Pare para pensar você acha que imposto é roubo?"
              className="image"
            />
            <div className="buttons">
              <Button
                onClick={this.handleChangeStage(5)}
                variant="contained"
                className="button"
                color="primary"
              >
                Sim
              </Button>
              <Button
                onClick={this.handleChangeStage(1)}
                variant="contained"
                className="button"
                color="secondary"
              >
                Não
              </Button>
            </div>
          </div>
        )}
        {stage === 1 && (
          <div className="stage">
            <div className="question">Você paga por que quer?</div>
            <img
              src="/img/breakingbad.gif"
              alt="Você paga por que quer?"
              className="image"
            />
            <div className="buttons">
              <Button
                onClick={this.handleChangeStage(2)}
                variant="contained"
                className="button"
                color="primary"
              >
                Sim
              </Button>
              <Button
                onClick={this.handleChangeStage(5)}
                variant="contained"
                className="button"
                color="secondary"
              >
                Não
              </Button>
            </div>
          </div>
        )}
        {stage === 2 && (
          <div className="stage">
            <div className="question">
              Você pode deixar de pagar por algum motivo?
            </div>
            <img
              src="/img/cat.gif"
              alt="Você pode deixar de pagar por algum motivo?"
              className="image"
            />
            <div className="buttons">
              <Button
                onClick={this.handleChangeStage(3)}
                variant="contained"
                className="button"
                color="primary"
              >
                Sim
              </Button>
              <Button
                onClick={this.handleChangeStage(5)}
                variant="contained"
                className="button"
                color="secondary"
              >
                Não
              </Button>
            </div>
          </div>
        )}
        {stage === 3 && (
          <div className="stage">
            <div className="question">
              Você vai preso se deixar de pagar ou perderá algum bem adquirido
              com seu trabalho?
            </div>
            <img
              src="/img/jail.gif"
              alt="Você vai preso se deixar de pagar ou perderá algum bem adquirido
                com seu trabalho?"
              className="image"
            />
            <div className="buttons">
              <Button
                onClick={this.handleChangeStage(5)}
                variant="contained"
                className="button"
                color="primary"
              >
                Sim
              </Button>
              <Button
                onClick={this.handleChangeStage(4)}
                variant="contained"
                className="button"
                color="secondary"
              >
                Não
              </Button>
            </div>
          </div>
        )}
        {stage === 4 && (
          <div className="stage">
            <div className="question">
              Mas e a lei Nº 4729 que está em vigor desde 14/07/1965?
            </div>
            <a
              href="http://www.planalto.gov.br/ccivil_03/leis/1950-1969/L4729.htm"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <img
                src="/img/lei-4729.jpg"
                alt="Mas e a lei Nº 4729 que está em vigor desde 14/07/1965?"
                className="image image-zoom"
              />
            </a>
            <div className="buttons">
              <Button
                onClick={this.handleChangeStage(3)}
                variant="contained"
                className="button"
                color="primary"
              >
                Sonegar é crime.
              </Button>
            </div>
          </div>
        )}
        {stage === 5 && (
          <div className="stage">
            <div className="question">Imposto é roubo.</div>
            <div className="video">
              <iframe
                title="Imposto é roubo"
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/XsbmavLkAwI"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
            <div className="share-title">Compartilhe essa verdade!</div>
            <div className="share-buttons">
              <div className="social">
                <FacebookShareButton
                  url={shareUrl}
                  quote={title}
                  className="social-button"
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
              </div>

              <div className="social">
                <TwitterShareButton
                  url={shareUrl}
                  title={title}
                  className="social-button"
                >
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
              </div>
              <div className="social">
                <RedditShareButton
                  url={shareUrl}
                  title={title}
                  windowWidth={660}
                  windowHeight={460}
                  className="social-button"
                >
                  <RedditIcon size={32} round />
                </RedditShareButton>
              </div>
              <div className="social">
                <TelegramShareButton
                  url={shareUrl}
                  title={title}
                  className="social-button"
                >
                  <TelegramIcon size={32} round />
                </TelegramShareButton>
              </div>

              <div className="social">
                <WhatsappShareButton
                  url={shareUrl}
                  title={title}
                  separator=":: "
                  className="social-button"
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </div>
            </div>
            <div className="buttons">
              <NavLink to={"/libertarios"} className="navlink">
                <Button variant="contained" className="button" color="primary">
                  Canais libertários
                </Button>
              </NavLink>
              <Button
                onClick={this.handleChangeStage(0)}
                variant="contained"
                className="button"
                color="secondary"
              >
                Voltar ao início
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
