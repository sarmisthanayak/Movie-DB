import { useEffect, useState } from "react";
import { fetchWhatsHot } from "../utils/api";
import MovieList from "../components/MovieList";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    heading: {
      textAlign: 'center',
    },
  }));

const WhatsHot = () =>{
    const classes = useStyles();
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        const getWhatsHot = async () => {
          const data = await fetchWhatsHot();
          setMovies(data);
        };

        getWhatsHot();
  }, []);

  return (
    <div>
      <h2 className={classes.heading}>What's Hot</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default WhatsHot;
