import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    header: {
        backgroundColor: 'black',
        padding: '0.5rem 1rem',
        marginBottom: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    
      },
      titleBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
        padding: '0.5rem',
        borderRadius: '5px',
      },
      title: {
        color: 'black',
        fontSize: '1rem',
        marginBottom: '0.5rem',
      },
      nav: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
      link: {
        color: 'white',
        fontSize: '1.2rem',
        marginLeft: '1.5rem',
        textDecoration: 'none',
      },
    });

const Header = ()=>{
    const classes = useStyles();
    return(
        <header className={classes.header}>
      <div className={classes.titleBox}>
        <h1 className={classes.title}>Movie DB</h1>
      </div>
      <nav className={classes.nav}>
        <Link to="/new" className={classes.link}>
          New Releases
        </Link>
        <Link to="/hot" className={classes.link}>
          What's Hot
        </Link>
      </nav>
    </header>
  );
};

export default Header;