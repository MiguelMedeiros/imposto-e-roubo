import { Container, Grid, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Libertarian from "./../Components/Libertarian";
import libertarians from "./../Data/Libertarians";

const useStyles = makeStyles((theme) => ({
  filters: {
    margin: "30px auto",
    padding: "0 0",
  },
  filterOption: {
    width: 200,
    margin: "auto",
  },
  panelRoot: {
    background: "#212121",
    color: "#616161",
  },
  panelIcon: {
    color: "#616161",
  },
}));

const PurpleSwitch = withStyles({
  switchBase: {
    color: grey[300],
    "&$checked": {
      color: "#f3c011",
    },
    "&$checked + $track": {
      backgroundColor: grey[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

export default function LibertariansContainer(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChangeFilter = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  function getSelectedFilters() {
    const params = new URLSearchParams(props.location.search);
    const filters = params.get("filters");
    return filters ? filters.split(",") : [];
  }

  const libertariansFilters = libertarians
    .reduce((acc, dudi) => acc.concat(dudi.filter), [])
    .filter((value, index, self) => {
      return self.indexOf(value) === index;
    })
    .sort();

  const selectedFilters = getSelectedFilters();

  const handleChange = (name) => (event) => {
    let filters = getSelectedFilters();
    if (event.target.checked) {
      filters.push(name);
    } else {
      filters = filters.filter((x) => x !== name);
    }

    props.history.replace({
      ...props.location,
      search: !filters.length ? "" : "?filters=" + filters.join(","),
    });
  };

  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={0} direction="row">
          <Grid item xs={12}>
            <Typography variant="h1">Libertários</Typography>
          </Grid>
          <Grid item xs={12} className={classes.filters}>
            <Grid container>
              <ExpansionPanel
                expanded={expanded === "panel"}
                onChange={handleChangeFilter("panel")}
                classes={{
                  root: classes.panelRoot,
                }}
              >
                <ExpansionPanelSummary
                  expandIcon={
                    <ExpandMoreIcon classes={{ root: classes.panelIcon }} />
                  }
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography>Pesquisar</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <FormGroup row>
                    {libertariansFilters.map((f) => (
                      <Grid item xs={12} sm={4} md={3} lg={2} key={f}>
                        <FormControlLabel
                          className={classes.filterOption}
                          control={
                            <PurpleSwitch
                              checked={selectedFilters.includes(f)}
                              onChange={handleChange(f)}
                              value={f}
                              color="secondary"
                            />
                          }
                          label={f}
                        />
                      </Grid>
                    ))}
                  </FormGroup>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Grid>
          </Grid>
          {libertarians
            .filter(
              (row) =>
                !selectedFilters.length ||
                selectedFilters.some((sf) => row.filter.includes(sf))
            )
            .map((person, index) => {
              return (
                <Grid key={index} item xs={6} sm={4} md={2}>
                  <Libertarian
                    key={index}
                    link={person.link}
                    image={person.image}
                    name={person.name}
                    filter={person.filter}
                  />
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </div>
  );
}
