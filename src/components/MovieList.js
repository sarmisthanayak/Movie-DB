import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Grid, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
      },

      rating: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: theme.spacing(2, 0),
      },
      starIcon: {
        color: '#fbc02d',
        marginRight: theme.spacing(0.5),
      },
      poster: {
        height: '500px',
        width: '100%',
        objectFit: 'cover',
      },
      '@media (max-width: 768px)': {
        poster: {
          height: '600px',
        },
      },
      '@media (max-width: 320px)': {
        poster: {
          height: '600px',
        },
      },
    }));

const MovieList = ({movies})=>{
    const classes = useStyles();

    return(
        <div className={classes.root}>
      <Grid container spacing={3}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <Card className={classes.card}>
              <CardMedia
                component="img"
                alt={movie.title}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className={classes.poster}
              />
              <CardContent>
              <div className={classes.rating}>
                    <Typography variant="subtitle1">
                        {movie.vote_average.toFixed(1)}
                    </Typography>
                  <StarIcon className={classes.starIcon} />
                  
                </div>
                <Typography gutterBottom variant="h6">
                  {movie.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
  
  export default MovieList;
