import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

class Liberterian extends React.Component {
  render() {
    const { link, image, name, filter } = this.props;
    let url = "/img/" + image;
    return (
      <Grid item className="avatar-container" xs={12} sm={6} md={3}>
        <a
          href={link}
          rel="noopener noreferrer"
          target="_blank"
          className="navlink"
        >
          <Avatar alt="Libertário" src={url} className="avatar-image" />
          <div className="name">{name}</div>
          <div className="description">{filter.join(", ")}</div>
        </a>
      </Grid>
    );
  }
}

export default Liberterian;
