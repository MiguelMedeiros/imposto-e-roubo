import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Libertarian from "../Components/Libertarian";
const { libertarians } = require("../Data/libertarians.json");
class Libertarians extends Component {
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
    const libertariansFilters = libertarians
      .reduce((acc, dudi) => acc.concat(dudi.filter), [])
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
          <h1>Canais Libertários</h1>
          <p>
            Caso você queira se aprofundar mais sobre a ideia libertária, segue
            alguns canais pra você começar:
          </p>
          <div className="filters">
            <FormGroup row>
              {libertariansFilters.map(f => (
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

        {libertarians
          .filter(row => !selectedFilters.length || selectedFilters.some(sf => row.filter.includes(sf)))
          .map((row, index) => {
            return (
              <Libertarian
                key={index}
                link={row.link}
                image={row.image}
                name={row.name}
                filter={row.filter}
              />
            );
          })}
      </Grid>
    );
  }
}

export default Libertarians;
