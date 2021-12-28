import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  avatar: {
    textAlign: "left",
    margin: "20px auto 0",
    fontFamily: "Roboto",
    fontWeight: "bold",
    "& a": {
      textDecoration: "none",
      color: "#f0f0f0",
    },
    "&:hover": {
      "& a": {
        color: "#f3c011 !important",
      },
    },
  },
  image: {
    width: "100%",
    height: "100%",
    margin: "auto",
    display: "inline",
    transition: "50ms all ease-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  name: {
    fontSize: 12,
    textTransform: "uppercase",
    margin: "20px auto 5px",
  },
  filters: {
    fontSize: 9,
    color: "#CCC",
    marginBottom: 40,
  },
}));

function Liberterian({ link, image, name, filter }) {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.avatar}>
        <a href={link} rel="noopener noreferrer" target="_blank">
          <img
            alt="Libertário"
            src={`/img/${image}`}
            className={classes.image}
          />
        </a>
        <a href={link} rel="noopener noreferrer" target="_blank">
          <div className={classes.name}>{name}</div>
        </a>
        <div className={classes.filters}>{filter.join(", ")}</div>
      </Box>
    </>
  );
}

Liberterian.propTypes = {
  loading: PropTypes.bool,
};

export default Liberterian;
