import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Button } from "@material-ui/core";
import Modal from "../Components/Modal";

class Book extends React.Component {
  render() {
    const { link, image, bookTitle, bookAuthor, content, audio } = this.props;
    let url = "/img/" + image;
    return (
      <Paper className="book">
        <Grid container spacing={16}>
          <Grid item className="item">
            <ButtonBase>
              <a rel="noopener noreferrer" target="_blank" href={link}>
                <img
                  border="0"
                  src={url}
                  alt="Amazon books"
                  className="image"
                />
              </a>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item container direction="column" spacing={16}>
              <Grid item>
                <Typography className="title">{bookTitle}</Typography>
                <Typography className="author">{bookAuthor}</Typography>
              </Grid>
              <Grid item>
                <Modal
                  title="Sinopse"
                  type="text"
                  bookTitle={bookTitle}
                  content={content}
                />
                <Modal
                  title="Ouvir"
                  type="video"
                  bookTitle={bookTitle}
                  content={audio}
                />
                <a rel="noopener noreferrer" target="_blank" href={link}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    className="button button-feature"
                  >
                    Comprar
                  </Button>
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default Book;
