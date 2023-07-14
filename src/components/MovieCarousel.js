import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card,  CardMedia, Typography } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  backdrop: {
    position: 'relative',
    height: '500px',
    marginBottom: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backdropImage: {
    height: '100%',
    objectFit: 'cover',
  },
  content: {
    position: 'absolute',
    bottom: 0,
    padding: theme.spacing(2),
    color: theme.palette.common.white,
  },
  card: {
    marginBottom: theme.spacing(2),
    display: 'flex',
    textAlign: 'justify',
    marginRight: theme.spacing(2)
  },
  poster: {
    height: '300px',
    width: 'auto',
    marginRight: theme.spacing(2),
    objectFit: 'cover',
    alignItems: 'center',
  },
}));

const NewReleases = ({ movies }) => {
  const classes = useStyles();

  return (
    <div>
      <Carousel animation="slide">
        {movies.map((movie) => (
          <Grid container spacing={3} key={movie.id}>
          <Grid item xs={12}>
            <div className={classes.backdrop}>
              <img
                src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                alt={movie.title}
                className={classes.backdropImage}
              />
            </div>
          </Grid>
          <div className={classes.container}>
          <Grid item sm={6}>
            <Card className={classes.card}>
              <CardMedia
                component="img"
                alt={movie.title}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className={classes.poster}
              />
              <div>
                <Typography variant="h6">{movie.title}</Typography>
                <Typography variant="subtitle1">
                  Rating: {movie.vote_average.toFixed(1)}
                </Typography>
                <Typography variant="body2">{movie.overview}</Typography>
              </div>
            </Card>
          </Grid>
          </div>
        </Grid>
      ))}
    </Carousel>
  </div>
);
};


export default NewReleases;