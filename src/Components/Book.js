import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  avatar: {
    textAlign: "left",
    padding: "20px 0 0",
    fontFamily: "Roboto",
    fontWeight: "bold",
    "& a": {
      textDecoration: "none",
      color: "#f0f0f0",
    },
    "&:hover": {
      cursor: "pointer",
      "& a": {
        color: "#f3c011 !important",
      },
    },
    "& img": {
      width: "100%",
      transition: "50ms all ease-out",
      "&:hover": {
        transform: "scale(1.05)",
      },
    },
  },
  name: {
    maxWidth: 320,
    width: "100%",
    fontSize: 10,
    textTransform: "uppercase",
    margin: "20px auto 5px",
  },
  filters: {
    fontSize: 9,
    color: "#CCC",
    marginBottom: 40,
  },
  author: {
    fontSize: 12,
  },
}));

function Book({ link, image, name, filter, author }) {
  const classes = useStyles();
  return (
    <Box className={classes.avatar}>
      <img src={`/img/${image}`} alt={name} />
      <div className={classes.name}>{name}</div>
      <div className={classes.author}>{author}</div>
      <div className={classes.filters}>{filter.join(", ")}</div>
    </Box>
  );
}

Book.propTypes = {
  loading: PropTypes.bool,
};

export default Book;
