import { Button, CircularProgress, Container } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import axios from "axios";


import youtubeUrlParser from "./../Helpers/youtube";

const useStyles = makeStyles((theme) => ({
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
  iframeContainer: {
    height: "400px",
    maxHeight: 720,
    display: "flex",
  },
  youtubeEmbed: {
    maxWidth: "100%",
    width: "100%",
    height: "100%",
  },
  imageYoutube: {
    maxWidth: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: 260,
    width: "100%",
    marginBottom: 5,
    cursor: "pointer",
    [theme.breakpoints.up("sm")]: {
      height: 230,
    },
    [theme.breakpoints.up("md")]: {
      height: 210,
    },
    [theme.breakpoints.up("lg")]: {
      height: 165,
    },
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
}));

export default function News(props) {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [videos, setVideos] = useState([]);
  const [ini, setIni] = useState(0);
  const [open, setOpen] = useState(false);
  const [modalVideo, setModalVideo] = useState(null);

  const handleOpen = (video) => {
    setModalVideo(video);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function getVideos(start) {
    if (start) {
      setLoading(true);
    }
    setLoadingMore(true);
    await axios.get(`https://cors-everywhere.herokuapp.com/https://visaolibertaria.com/api/Video/List?ini=${ini}&max=12`)
      .then((res) => {
        const newVideos = res.data.videos;
        const allVideos = videos;
        allVideos.push(...newVideos);
        setVideos(allVideos);
        setIni(ini + 12);
        if (start) {
          setLoading(false);
        }
        setLoadingMore(false);
      });
  }

  useEffect(() => {
    getVideos(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMoreVideos = () => {
    getVideos();
  };

  return (
    <Container style={{ padding: "0" }}>
      <div>
        <Grid container direction="row">
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
                    {modalVideo.Title}
                  </Typography>
                  <Typography
                    variant="caption"
                    style={{
                      color: "#ccc",
                      marginBottom: 15,
                      display: "block",
                    }}
                  >
                    {/* {modalVideo.authors.Date} */}
                  </Typography>
                  <div className={classes.iframeContainer}>
                    <iframe
                      title={modalVideo.title}
                      src={`https://www.youtube.com/embed/${youtubeUrlParser(
                        modalVideo.youtubeLink
                      )}?autoplay=1`}
                      height="100%"
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
          {(loading && videos.length === 0 ? Array.from(new Array(6)) : videos).map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={3}>
              <Box
                marginLeft={1}
                marginRight={1}
                my={2}
                className={classes.videoContainer}
              >
                {item ? (
                  <div
                    className={classes.imageYoutube}
                    style={{
                      backgroundImage:
                        "url('http://img.youtube.com/vi/" +
                        youtubeUrlParser(item.youtubeLink) +
                        "/hqdefault.jpg')",
                    }}
                    onClick={() => {
                      handleOpen(item);
                    }}
                  ></div>
                ) : (
                  <Skeleton
                    variant="rect"
                    style={{ backgroundColor: "#212121" }}
                    height={175}
                  />
                )}

                {item ? (
                  <Box
                    pr={2}
                    onClick={() => {
                      handleOpen(item);
                    }}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    {/* <Typography variant="caption" style={{ color: "#ccc" }}>
                      {item.Authors.Date}
                    </Typography> */}
                    <Typography
                      gutterBottom
                      variant="body1"
                      style={{ fontWeight: "bold", color: "#f9f9f9" }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                ) : (
                  <Box pt={0.5}>
                    <Skeleton style={{ backgroundColor: "#212121" }} />
                    <Skeleton style={{ backgroundColor: "#212121" }} />
                    <Skeleton
                      style={{ backgroundColor: "#212121" }}
                      width="60%"
                    />
                  </Box>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </div>
      {!loading && (
        <Box textAlign="center" my={6}>
          {loadingMore && <CircularProgress size={32} color="secondary" />}
          {!loadingMore && (
            <Button
              onClick={() => {
                loadMoreVideos();
              }}
              size="large"
              variant="contained"
              color="secondary"
            >
              Carregar mais
            </Button>
          )}
        </Box>
      )}
    </Container>
  );
}

News.propTypes = {
  loading: PropTypes.bool,
};
