import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    footer: {
        backgroundColor: 'grey',
        padding: '0.5rem 1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        textAlign: 'center',
    },
});

const Footer=()=>{
    const classes= useStyles();
    return(
        <footer className={classes.footer}>
            <p>upGrad Frontend Hackathon</p>
        </footer>
    );
};

export default Footer;