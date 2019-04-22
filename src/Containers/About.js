import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

class Donation extends Component {
  render() {
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        className="content content-small avatars"
      >
        <Grid item className="avatar-container" xs={12}>
          <h1>Por que esse site existe?</h1>
          <div className="text-justify">
            <p>Provavelmente você já ouvir essa pergunta: imposto é roubo?</p>
            <p>
              Para te ajudar com a resposta, desenvolvi esse site como forma de
              conscientização de todos nós - pagadores de impostos.
            </p>
            <br />
            <p>A ideia veio a partir de um diagrama que achei na internet:</p>
            <img
              src="/img/diagrama.png"
              alt="Fiagrama - Imposto é roubo?"
              className="image"
            />
            <p>
              A partir daí foi só arregaçar as mangas e colocar a ideia em
              prática!
            </p>
          </div>
        </Grid>
        <Grid item className="avatar-container" xs={12}>
          <h2>Faça uma doação agora!</h2>
          <p>Doe Bitcoins para ajudar a manter o site online:</p>
          <img
            src="/img/donation.png"
            alt="Doe Bitcoins"
            className="image image-small"
          />
        </Grid>
        <Grid item className="avatar-container" xs={12}>
          <h2>Quem desenvolveu o site?</h2>
          <a
            href="https://www.miguelmedeiros.com.br/"
            rel="noopener noreferrer"
            target="_blank"
            className="navlink"
          >
            <Avatar
              alt="Remy Sharp"
              src="/img/miguelmedeiros.jpg"
              className="avatar-image"
            />
            <div className="name">Miguel Medeiros</div>
            <div className="description">Desenvolvedor Full-stack</div>
          </a>
        </Grid>
      </Grid>
    );
  }
}

export default Donation;
