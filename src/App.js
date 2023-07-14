import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NewReleases from './screens/NewReleases';
import WhatsHot from './screens/WhatsHot';
import { makeStyles } from '@material-ui/core/styles';
 

const useStyles = makeStyles({
  root: {
    width: '100%',
    fontFamily: 'sans-serif',
  },
});

const App = () =>{
  const classes = useStyles();
  return (
    <Router>
    <div className={classes.root}>
      <Header />
      <Routes>
        <Route path="/new" element={<NewReleases/>} />
        <Route path="/hot" element={<WhatsHot/>} />
      </Routes>
      <Footer />
    </div>
  </Router>
  );
};

export default App;
