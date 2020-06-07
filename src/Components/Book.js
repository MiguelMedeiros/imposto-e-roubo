import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  avatar: {
    textAlign: "center",
    padding: "20px 0 0",
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
    height: 360,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    transition: "50ms all ease-out",
    [theme.breakpoints.up("md")]: {
      height: 400,
    },
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  name: {
    maxWidth: 320,
    width: "100%",
    fontSize: 18,
    textTransform: "uppercase",
    margin: "20px auto 5px",
  },
  filters: {
    fontSize: 11,
    color: "#CCC",
    marginBottom: 40,
  },
  author: {
    fontSize: 14,
  },
}));

function Liberterian({ link, image, name, filter, author }) {
  const classes = useStyles();
  return (
    <Box className={classes.avatar}>
      <div
        className={classes.image}
        style={{
          backgroundImage: `url('/img/${image}')`,
        }}
      ></div>
      <div className={classes.name}>{name}</div>
      <div className={classes.author}>{author}</div>
      <div className={classes.filters}>{filter.join(", ")}</div>
    </Box>
  );
}

Liberterian.propTypes = {
  loading: PropTypes.bool,
};

export default Liberterian;
