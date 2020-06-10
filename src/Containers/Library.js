import { Button, Container, Grid, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Modal from "@material-ui/core/Modal";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import React, { useState } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Book from "./../Components/Book";
import libertarians from "./../Data/Books";

const useStyles = makeStyles((theme) => ({
  filters: {
    margin: "30px auto",
    padding: "0 0",
  },
  filterOption: {
    width: 200,
    margin: "auto",
  },
  iframeContainer: {
    height: "57vh",
  },
  youtubeEmbed: {
    maxWidth: "100%",
    width: "100%",
    height: "100%",
  },
  modal: {
    top: "50%",
    left: 0,
    margin: "10px",
    width: "100%",
    transform: `translate(0%, -50%)`,
    [theme.breakpoints.up("sm")]: {
      transform: `translate(-50%, -50%)`,
      top: `50%`,
      left: `50%`,
      width: 600,
    },
    [theme.breakpoints.up("md")]: {
      width: 800,
    },
  },
  videoContainer: {
    transition: "all 100ms",
    "&:hover": {
      transform: "scale(1.04)",
    },
  },
  paper: {
    position: "absolute",
    backgroundColor: "#212121",
    boxShadow: theme.shadows[5],
    border: "none !important",
    color: "#f0f0f0",
    padding: theme.spacing(4),
    borderRadius: 4,
    outline: "none !important",
    "&:active": {
      outline: "none !important",
    },
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
  const [modalVideo, setModalVideo] = useState(null);
  const [open, setOpen] = useState(false);
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

  const handleOpen = (video) => {
    setModalVideo(video);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
            <Typography variant="h1">Bibliteca</Typography>
          </Grid>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <div className={`${classes.paper} ${classes.modal}`}>
              {modalVideo && (
                <>
                  <Typography
                    variant="h2"
                    style={{
                      marginBottom: 5,
                      fontSize: 20,
                      display: "block",
                      fontWeight: "bold",
                    }}
                  >
                    {modalVideo.bookTitle}
                  </Typography>
                  <Typography
                    variant="caption"
                    style={{
                      color: "#ccc",
                      marginBottom: 15,
                      display: "block",
                    }}
                  >
                    {modalVideo.bookAuthor}
                  </Typography>
                  <Button
                    variant="contained"
                    href={modalVideo.link}
                    style={{ margin: "5px auto 15px" }}
                    color="secondary"
                  >
                    Comprar Livro
                  </Button>
                  <div className={classes.iframeContainer}>
                    <iframe
                      title={modalVideo.Title}
                      src={`https://www.youtube.com/embed/${modalVideo.audio}?autoplay=1`}
                      height="90%"
                      width="100%"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </>
              )}
            </div>
          </Modal>
          <Grid item xs={12} className={classes.filters}>
            <ExpansionPanel
              expanded={expanded === "panel"}
              onChange={handleChangeFilter("panel")}
              color="secondary"
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
          {libertarians
            .filter(
              (row) =>
                !selectedFilters.length ||
                selectedFilters.some((sf) => row.filter.includes(sf))
            )
            .map((book, index) => {
              return (
                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={4}
                  md={3}
                  style={{ padding: "10px 5px" }}
                  onClick={() => {
                    handleOpen(book);
                  }}
                >
                  <Book
                    key={index}
                    link={book.link}
                    image={book.image}
                    name={book.bookTitle}
                    author={book.bookAuthor}
                    filter={book.filter}
                  />
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </div>
  );
}
