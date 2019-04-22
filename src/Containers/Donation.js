import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

class About extends Component {
  render() {
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        className="content content-small"
      >
        <Grid item className="" xs={12}>
          <h2>Faça uma doação agora!</h2>
          <p>Como todos nós sabemos não existe almoço grátis!</p>
          <p>Para manter esse site online temos alguns custos como:</p>
          <ul>
            <li>Servidor</li>
            <li>Registro do Domínio</li>
            <li>Desenvolvimento</li>
          </ul>
          <img
            src="/img/donation.gif"
            alt="Doe Bitcoin"
            className="image image-zoom"
          />
          <p>Então se puder doe Bitcoins para ajudar a manter o site online:</p>
          <div className="align-center">
            <img
              src="/img/donation.png"
              alt="Doe Bitcoins"
              className="image image-small"
            />
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default About;
