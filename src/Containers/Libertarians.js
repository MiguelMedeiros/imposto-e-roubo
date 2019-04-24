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
    checkedTecnologia: false,
    checkedEntrevistas: false,
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
      checkedTecnologia,
      checkedEntrevistas,
    } = this.state;
    let checkedAll = true;
    if (
      checkedFilosofia ||
      checkedCriptomoedas ||
      checkedEconomia ||
      checkedHumor ||
      checkedMusica ||
      checkedNoticias ||
      checkedPolitica ||
      checkedTecnologia ||
      checkedEntrevistas
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
                    checked={this.state.checkedTecnologia}
                    onChange={this.handleChange("checkedTecnologia")}
                    value="checkedTecnologia"
                    color="primary"
                  />
                }
                label="Tecnologia"
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
              <FormControlLabel
                className="filter-option"
                control={
                  <Switch
                    checked={this.state.checkedEntrevistas}
                    onChange={this.handleChange("checkedEntrevistas")}
                    value="checkedEntrevistas"
                    color="primary"
                  />
                }
                label="Entrevistas"
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
              <div className="name">Daniel Fraga</div>
              <div className="description">
                Filosofia, Política, Economia, Criptomoedas
              </div>
            </a>
          </Grid>
        )}
        {(checkedEconomia ||
          checkedCriptomoedas ||
          checkedTecnologia ||
          checkedAll) && (
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
              <div className="description">
                Criptomoedas, Tecnologia, Economia
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
        {(checkedCriptomoedas || checkedTecnologia || checkedAll) && (
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
              <div className="description">Criptomoedas, Tecnologia</div>
            </a>
          </Grid>
        )}
        {(checkedEconomia || checkedCriptomoedas || checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/channel/UCEkg0hhWS_oxD24f_6C9Qbw"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/criptomaniacos.jpg"
                className="avatar-image"
              />
              <div className="name">Criptomaniacos</div>
              <div className="description">Economia, Criptomoedas</div>
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
        {(checkedPolitica || checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/channel/UCk10-mQOSKMB4bndYHTRyoA"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/kami.jpg"
                className="avatar-image"
              />
              <div className="name">Kami Petelin</div>
              <div className="description">Política</div>
            </a>
          </Grid>
        )}
        {(checkedPolitica || checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/channel/UCn1QV3v-wxL9Or6KhjqFqhQ"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/ancapzone.jpg"
                className="avatar-image"
              />
              <div className="name">Ancap Zone</div>
              <div className="description">Política</div>
            </a>
          </Grid>
        )}
        {(checkedMusica || checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/channel/UCs9mlEEIkVfJvORmb7G5Yiw"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/jayhokka.jpg"
                className="avatar-image"
              />
              <div className="name">Jay Hokka</div>
              <div className="description">Música</div>
            </a>
          </Grid>
        )}
        {(checkedCriptomoedas || checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/channel/UCEoSANmneNddweVvUghnfpQ"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/bitconheiros.jpg"
                className="avatar-image"
              />
              <div className="name">Bitcoinheiros</div>
              <div className="description">Criptomoedas</div>
            </a>
          </Grid>
        )}
        {(checkedFilosofia || checkedPolitica || checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/channel/UCEoSANmneNddweVvUghnfpQ"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/choppacast.jpg"
                className="avatar-image"
              />
              <div className="name">ChoppaCast</div>
              <div className="description">Filosofia, Política</div>
            </a>
          </Grid>
        )}
        {(checkedTecnologia || checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/channel/UC0x7nBPaRrBOc4HCzYXVkwg"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/victoria.jpg"
                className="avatar-image"
              />
              <div className="name">Victória Hikari</div>
              <div className="description">Tecnologia</div>
            </a>
          </Grid>
        )}
        {(checkedFilosofia ||
          checkedPolitica ||
          checkedEconomia ||
          checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/channel/UCtvt8kfIvCH7yT0b5MFTVNA"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/recapitulacao.jpg"
                className="avatar-image"
              />
              <div className="name">Recapitulação Ancap</div>
              <div className="description">Filosofia, Política, Economia</div>
            </a>
          </Grid>
        )}
        {(checkedPolitica || checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/channel/UC6gmlmhRiJxnwdgRd4zoF3A"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/brunna.jpg"
                className="avatar-image"
              />
              <div className="name">Brunna Silva</div>
              <div className="description">Política</div>
            </a>
          </Grid>
        )}
        {(checkedFilosofia ||
          checkedEconomia ||
          checkedPolitica ||
          checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/channel/UCYyu1QvD3Y7pvtnNLxCB7Gw"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/lobo.jpg"
                className="avatar-image"
              />
              <div className="name">Lobo Conservador</div>
              <div className="description">Filosofia, Economia, Política</div>
            </a>
          </Grid>
        )}
        {(checkedFilosofia ||
          checkedEconomia ||
          checkedPolitica ||
          checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/channel/UC6IJgpDhXg0JoULOXw74BKg"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/antiestado.jpg"
                className="avatar-image"
              />
              <div className="name">Anti Estado</div>
              <div className="description">Filosofia, Economia, Política</div>
            </a>
          </Grid>
        )}
        {(checkedMusica || checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/channel/UC3TSb13siLzhs-UHmIzBoSw"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/gabrielmorente.jpg"
                className="avatar-image"
              />
              <div className="name">Gabriel Morente</div>
              <div className="description">Música</div>
            </a>
          </Grid>
        )}
        {(checkedMusica || checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/channel/UCJtvhFlHTHTZEcToA95wbig"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/slammer.jpg"
                className="avatar-image"
              />
              <div className="name">Slammer OG</div>
              <div className="description">Música</div>
            </a>
          </Grid>
        )}
        {(checkedFilosofia || checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/channel/UCLn2HxpVGYkLGsn2Gl8aWeA"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/gazeta.jpg"
                className="avatar-image"
              />
              <div className="name">Gazeta Libertária</div>
              <div className="description">Filosofia</div>
            </a>
          </Grid>
        )}
        {(checkedHumor || checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/channel/UC5pmhNvMyjuGpbJmqQbRC0g"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/arthurpetry.jpg"
                className="avatar-image"
              />
              <div className="name">Arthur Petry</div>
              <div className="description">Humor</div>
            </a>
          </Grid>
        )}
        {(checkedCriptomoedas || checkedTecnologia || checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/c/brunogarcia99"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/brunogarcia.jpg"
                className="avatar-image"
              />
              <div className="name">Bruno Garcia</div>
              <div className="description">Criptomoedas, Tecnologia</div>
            </a>
          </Grid>
        )}
        {(checkedCriptomoedas || checkedTecnologia || checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/channel/UC1OOmmuYyUimzsxcwpf7mHA"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/criptotec.jpg"
                className="avatar-image"
              />
              <div className="name">Cripto Tec</div>
              <div className="description">Criptomoedas, Tecnologia</div>
            </a>
          </Grid>
        )}
        {(checkedMusica || checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/channel/UCvHBUq2A27OeITnWesAwUJw"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/jayjay.jpg"
                className="avatar-image"
              />
              <div className="name">Jay Jay Ⓥ</div>
              <div className="description">Música</div>
            </a>
          </Grid>
        )}
        {(checkedPolitica || checkedFilosofia || checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/channel/UCY0v0I-00pjwdN5bzOtZLkA"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/oagorista.jpg"
                className="avatar-image"
              />
              <div className="name">O Agorista</div>
              <div className="description">Filosofia, Economia</div>
            </a>
          </Grid>
        )}
        {(checkedEntrevistas || checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/CerradoLivre"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/cerradolivre.jpg"
                className="avatar-image"
              />
              <div className="name">Cerrado Livre</div>
              <div className="description">Entrevistas</div>
            </a>
          </Grid>
        )}
        {(checkedEntrevistas || checkedAll) && (
          <Grid item className="avatar-container" xs={12} sm={6} md={3}>
            <a
              href="https://www.youtube.com/channel/UCXi0ZRxNBP7COCMfyl8z5gg"
              rel="noopener noreferrer"
              target="_blank"
              className="navlink"
            >
              <Avatar
                alt="Libertário"
                src="/img/anarcoze.jpg"
                className="avatar-image"
              />
              <div className="name">Projeto Anarcoze</div>
              <div className="description">Entrevistas</div>
            </a>
          </Grid>
        )}
      </Grid>
    );
  }
}

export default Libertarians;
