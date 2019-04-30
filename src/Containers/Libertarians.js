import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Libertarian from "../Components/Libertarian";
const { libertarians } = require("../Data/libertarians.json");
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
    checkedPodcast: false,
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  checkFilter = filter => {
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
      checkedPodcast,
    } = this.state;
    for (let i = 0; i < filter.length; i++) {
      if (checkedCriptomoedas && filter[i] === "criptomoedas") {
        return true;
      }
      if (checkedFilosofia && filter[i] === "filosofia") {
        return true;
      }
      if (checkedPolitica && filter[i] === "politica") {
        return true;
      }
      if (checkedEconomia && filter[i] === "economia") {
        return true;
      }
      if (checkedTecnologia && filter[i] === "tecnologia") {
        return true;
      }
      if (checkedNoticias && filter[i] === "noticias") {
        return true;
      }
      if (checkedHumor && filter[i] === "humor") {
        return true;
      }
      if (checkedMusica && filter[i] === "musica") {
        return true;
      }
      if (checkedEntrevistas && filter[i] === "entrevistas") {
        return true;
      }
      if (checkedPodcast && filter[i] === "podcast") {
        return true;
      }
    }
    return false;
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
      checkedPodcast,
      checkedDireito,
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
      checkedEntrevistas ||
      checkedPodcast ||
      checkedDireito
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
              <FormControlLabel
                className="filter-option"
                control={
                  <Switch
                    checked={this.state.checkedPodcast}
                    onChange={this.handleChange("checkedPodcast")}
                    value="checkedPodcast"
                    color="primary"
                  />
                }
                label="Podcast"
              />
              <FormControlLabel
                className="filter-option"
                control={
                  <Switch
                    checked={this.state.checkedDireito}
                    onChange={this.handleChange("checkedDireito")}
                    value="checkedDireito"
                    color="primary"
                  />
                }
                label="Direito"
              />
            </FormGroup>
          </div>
        </Grid>

        {libertarians.map((row, index) => {
          if (this.checkFilter(row.filter) || checkedAll) {
            return (
              <Libertarian
                key={index}
                link={row.link}
                image={row.image}
                name={row.name}
                filter={row.filter}
              />
            );
          } else {
            return "";
          }
        })}
      </Grid>
    );
  }
}

export default Libertarians;
