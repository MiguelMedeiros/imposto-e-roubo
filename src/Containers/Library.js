import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Book from "../Components/Book";
const { books } = require("../Data/books.json");

class Library extends Component {
  state = {
    checkedFilosofia: false,
    checkedCriptomoedas: false,
    checkedPolitica: false,
    checkedEconomia: false,
    checkedTecnologia: false,
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
      checkedTecnologia,
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
    }
    return false;
  };
  render() {
    const {
      checkedFilosofia,
      checkedCriptomoedas,
      checkedPolitica,
      checkedEconomia,
      checkedTecnologia,
    } = this.state;
    let checkedAll = true;
    if (
      checkedFilosofia ||
      checkedCriptomoedas ||
      checkedEconomia ||
      checkedPolitica ||
      checkedTecnologia
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
          <h1>Biblioteca Libertária</h1>
          <p>
            Caso você queira se aprofundar mais sobre a literatura libertária,
            segue alguns livros pra você começar:
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
            </FormGroup>
          </div>
        </Grid>

        {books.map((row, index) => {
          if (this.checkFilter(row.filter) || checkedAll) {
            return (
              <Book
                key={index}
                link={row.link}
                image={row.image}
                bookTitle={row.bookTitle}
                bookAuthor={row.bookAuthor}
                content={row.content}
                audio={row.audio}
              />
            );
          }else{
            return ("");
          }
        })}
      </Grid>
    );
  }
}

export default Library;