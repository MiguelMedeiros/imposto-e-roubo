import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Book from "../Components/Book";
const { books } = require("../Data/books.json");

class Library extends Component {

  getSelectedFilters = () => {
    const params = new URLSearchParams(this.props.location.search);
    const filters = params.get('filters');
    return filters ? filters.split(',') : [];
  };

  handleChange = name => event => {
    let filters = this.getSelectedFilters();
    if (event.target.checked) {
      filters.push(name);
    } else {
      filters = filters.filter(x => x !== name);
    }

    this.props.history.replace({
      ...this.props.location,
      search: !filters.length ? '' : '?filters=' + filters.join(',')
    });
  };

  render() {
    const bookFilters = books
      .reduce((acc, book) => acc.concat(book.filter), [])
      .filter((value, index, self) => {
        return self.indexOf(value) === index;
      }).sort();
    const selectedFilters = this.getSelectedFilters();

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
              {bookFilters.map(f => (
                <FormControlLabel
                  className="filter-option"
                  control={
                    <Switch
                      checked={selectedFilters.includes(f)}
                      onChange={this.handleChange(f)}
                      value={f}
                      color="primary"
                    />
                  }
                  label={f}
                  key={f}
                />))}
            </FormGroup>
          </div>
        </Grid>

        {books
          .filter(row => !selectedFilters.length || selectedFilters.some(sf => row.filter.includes(sf)))
          .map((row, index) => {
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
          })}
      </Grid>
    );
  }
}

export default Library;