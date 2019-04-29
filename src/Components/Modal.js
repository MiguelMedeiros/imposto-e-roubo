import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: "absolute",
    maxWidth: "600px",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none",
  },
});

class SimpleModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, title, bookTitle, content, type } = this.props;
    let url = "";
    if (type === "video") {
      url = "https://www.youtube.com/embed/" + content;
    }

    return (
      <React.Fragment>
        <Button
          variant="outlined"
          color="secondary"
          className="button"
          onClick={this.handleOpen}
        >
          {title}
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6">{bookTitle}</Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              {type === "text" && content}
              {type === "video" && (
                <iframe
                  width="560"
                  height="315"
                  src={url}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  title={bookTitle}
                />
              )}
            </Typography>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleModal);
