import { useEffect, useState } from "react";
import { fetchNewReleases } from "../utils/api";
import MovieCarousel from '../components/MovieCarousel';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    heading1: {
      textAlign: 'center',
    },
  }));

const NewReleases = () =>{
    const classes=useStyles();
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        const getNewReleases = async () => {
          const data = await fetchNewReleases();
          setMovies(data);
        };

        getNewReleases();
  }, []);

  return (
    <div>
      <h2 className={classes.heading1}>New Releases</h2>
      <MovieCarousel movies={movies} />
    </div>
  );
};

export default NewReleases;
