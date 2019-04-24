import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

class Libertarians extends Component {
  state = {
    checkedFilosofia: false,
    checkedCriptomoedas: false,
    checkedPolitica: false,
    checkedEconomia: false,
    checkedNoticias: false,
    checkedHumor: false,
    checkedMusica: false,
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  render() {
    const {
      checkedFilosofia,
      checkedCriptomoedas,
      checkedPolitica,
      checkedEconomia,
      checkedNoticias,
      checkedHumor,
      checkedMusica,
    } = this.state;
    let checkedAll = true;
    if (
      checkedFilosofia ||
      checkedCriptomoedas ||
      checkedEconomia ||
      checkedHumor ||
      checkedMusica ||
      checkedNoticias ||
      checkedPolitica
    ) {
      checkedAll = false;
    }
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        className="content avatars"
      >
        <Grid item xs={12}>
          <h1>Canais Libertários</h1>
          <p>
            Caso você queira se aprofundar mais sobre a ideia libertária, segue
            alguns canais pra você começar:
          </p>
          <div className="filters">
            <FormGroup row>
              <FormControlLabel
                className="filter-option"
                control={
                  <Switch
                    checked={this.state.checkedFilosofia}
                    onChange={this.handleChange("checkedFilosofia")}
                    value="checkedFilosofia"
                    color="primary"
                  />
                }
                label="Filosofia"
              />
              <FormControlLabel
                className="filter-option"
                control={
                  <Switch
                    checked={this.state.checkedCriptomoedas}
                    onChange={this.handleChange("checkedCriptomoedas")}
                    value="checkedCriptomoedas"
                    color="primary"
                  />
                }
                label="Criptomoedas"
              />
              <FormControlLabel
                className="filter-option"
                control={
                  <Switch
                    checked={this.state.checkedPolitica}
                    onChange={this.handleChange("checkedPolitica")}
                    value="checkedPolitica"
                    color="primary"
                  />
                }
                label="Política"
              />
              <FormControlLabel
                className="filter-option"
                control={
                  <Switch
                    checked={this.state.checkedEconomia}
                    onChange={this.handleChange("checkedEconomia")}
                    value="checkedEconomia"
                    color="primary"
                  />
                }
                label="Economia"
              />
              <FormControlLabel
                className="filter-option"
                control={
                  <Switch
                    checked={this.state.checkedNoticias}
                    onChange={this.handleChange("checkedNoticias")}
                    value="checkedNoticias"
                    color="primary"
                  />
                }
                label="Notícias"
              />
              <FormControlLabel
                className="filter-option"
                control={
                  <Switch
                    checked={this.state.checkedHumor}
                    onChange={this.handleChange("checkedHumor")}
                    value="checkedHumor"
                    color="primary"
                  />
                }
                label="Humor"
              />
              <FormControlLabel
                className="filter-option"
                control={
                  <Switch
                    checked={this.state.checkedMusica}
                    onChange={this.handleChange("checkedMusica")}
                    value="checkedMusica"
                    color="primary"
                  />
                }
                label="Música"
              />
            </FormGroup>
          </div>
        </Grid>
        {(checkedFilosofia ||
          checkedPolitica ||
          checkedEconomia ||
          checkedCriptomoedas ||
          checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/user/DanielFragaBR"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/danielfraga.jpg"
                className="avatar-image"
              />
              <div className="name">Ideias Radicais</div>
              <div className="description">
                Filosofia, Política, Economia, Criptomoedas
              </div>
            </a>
          </Grid>
        )}

        {(checkedFilosofia ||
          checkedPolitica ||
          checkedEconomia ||
          checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/user/ideiasradicais"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/ideiasradicais.jpg"
                className="avatar-image"
              />
              <div className="name">Ideias Radicais</div>
              <div className="description">Filosofia, Política, Economia</div>
            </a>
          </Grid>
        )}

        {(checkedCriptomoedas || checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/user/miguelmedeiros"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/miguelmedeiros.jpg"
                className="avatar-image"
              />
              <div className="name">Miguel Medeiros</div>
              <div className="description">Criptomoedas</div>
            </a>
          </Grid>
        )}

        {(checkedFilosofia || checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/channel/UCHiPlljsU3rFJvNegG6BEPw"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/sokath.jpg"
                className="avatar-image"
              />
              <div className="name">Sokath</div>
              <div className="description">Filosofia</div>
            </a>
          </Grid>
        )}

        {(checkedFilosofia ||
          checkedPolitica ||
          checkedEconomia ||
          checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/user/paulokogos"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/kogos.jpg"
                className="avatar-image"
              />
              <div className="name">Paulo Kogos</div>
              <div className="description">Filosofia, Economia, Política</div>
            </a>
          </Grid>
        )}

        {(checkedFilosofia ||
          checkedPolitica ||
          checkedEconomia ||
          checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/channel/UC98rzzueHX1251cyGEbmqtg"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/etoempire.jpg"
                className="avatar-image"
              />
              <div className="name">Etoempire</div>
              <div className="description">Filosofia, Economia, Política</div>
            </a>
          </Grid>
        )}

        {(checkedFilosofia ||
          checkedPolitica ||
          checkedEconomia ||
          checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/channel/UCQZxQh19-PsMWDRChKh1QGw"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/zanfa.jpg"
                className="avatar-image"
              />
              <div className="name">Zanfa</div>
              <div className="description">Filosofia, Economia, Política</div>
            </a>
          </Grid>
        )}

        {(checkedFilosofia ||
          checkedPolitica ||
          checkedEconomia ||
          checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/channel/UC4z5OsOcltedh3iZKYJ2UcA"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/pessimista.jpg"
                className="avatar-image"
              />
              <div className="name">O Pessimista</div>
              <div className="description">Filosofia, Economia, Política</div>
            </a>
          </Grid>
        )}

        {(checkedFilosofia ||
          checkedNoticias ||
          checkedEconomia ||
          checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/channel/UCSyG9ph5BJSmPRyzc_eGC4g"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/ancapsu.jpg"
                className="avatar-image"
              />
              <div className="name">Ancap.SU</div>
              <div className="description">Filosofia, Economia, Notícias</div>
            </a>
          </Grid>
        )}

        {(checkedFilosofia || checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/channel/UCcgAa7wJ1OwRzd-TGFwIxPA"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/fhoer.jpg"
                className="avatar-image"
              />
              <div className="name">Fhoer</div>
              <div className="description">Filosofia</div>
            </a>
          </Grid>
        )}

        {(checkedFilosofia || checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/channel/UCOq_USHG_AogX4dwqBYlvhQ"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/sotospeak.jpg"
                className="avatar-image"
              />
              <div className="name">So to Speak</div>
              <div className="description">Filosofia</div>
            </a>
          </Grid>
        )}

        {(checkedFilosofia || checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/user/CanalTal"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/porto.jpg"
                className="avatar-image"
              />
              <div className="name">Alexandre Porto</div>
              <div className="description">Filosofia</div>
            </a>
          </Grid>
        )}

        {(checkedHumor || checkedMusica || checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/channel/UC6cALLZLWQGilBFBB0PWAog"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/maiconkuster.jpg"
                className="avatar-image"
              />
              <div className="name">Maicon Küster</div>
              <div className="description">Humor, Música</div>
            </a>
          </Grid>
        )}

        {(checkedFilosofia ||
          checkedPolitica ||
          checkedEconomia ||
          checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/channel/UCLGdIYRBOHcbgRfqk9Lw7xg"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/john.jpg"
                className="avatar-image"
              />
              <div className="name">Jhon Swanson</div>
              <div className="description">Filosofia, Economia, Política</div>
            </a>
          </Grid>
        )}

        {(checkedFilosofia ||
          checkedPolitica ||
          checkedEconomia ||
          checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/channel/UCsFgHFNWP-1I9mCoA59TixA"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/midiaancap.jpg"
                className="avatar-image"
              />
              <div className="name">Mídia Ancap</div>
              <div className="description">Filosofia, Economia, Política</div>
            </a>
          </Grid>
        )}

        {(checkedFilosofia || checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/channel/UChk-Os-kdbd7ZNcANBNSQNQ"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/canaltrouxa.jpg"
                className="avatar-image"
              />
              <div className="name">Canal do Trouxa</div>
              <div className="description">Filosofia</div>
            </a>
          </Grid>
        )}

        {(checkedCriptomoedas || checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/channel/UC549xKR8JvVXLNHvzV_AZsw"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/avelino.jpg"
                className="avatar-image"
              />
              <div className="name">Avelino Morganti</div>
              <div className="description">Criptomoedas</div>
            </a>
          </Grid>
        )}

        {(checkedCriptomoedas || checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/channel/UC4H35F5f2c5cyR-pbZlt12Q"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/tiagosalem.jpg"
                className="avatar-image"
              />
              <div className="name">Tiago Salem</div>
              <div className="description">Criptomoedas</div>
            </a>
          </Grid>
        )}

        {(checkedFilosofia || checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/channel/UCCcyy2UQLeNQw0aDcwFE2ng"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/randall.jpg"
                className="avatar-image"
              />
              <div className="name">FH Randall</div>
              <div className="description">Filosofia</div>
            </a>
          </Grid>
        )}

        {(checkedEconomia || checkedCriptomoedas || checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/channel/UCLJkh3QjHsLtK0LZFd28oGg"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/fernandoulrich.jpg"
                className="avatar-image"
              />
              <div className="name">Fernando Ulrich</div>
              <div className="description">Economia, Criptomoedas</div>
            </a>
          </Grid>
        )}
      </Grid>
    );
  }
}

export default Libertarians;
