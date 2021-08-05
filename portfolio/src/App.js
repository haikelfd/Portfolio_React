import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
// import pages 
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetails';
// Router 
import {Switch,Route, useLocation} from 'react-router-dom';
// Animation
import {AnimatePresence} from "framer-motion";

function App(){
    const location = useLocation();
    console.log(location);
    return(
        <div className = "App"> 
        <GlobalStyle/>
        <Nav/>
        <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname} >
        <Route path="/" exact>
        <AboutUs/>
        </Route>
        <Route path="/Work" exact>
        <OurWork/>
        </Route>
        <Route path="/Work/:id">
            <MovieDetail/>
        </Route>
        <Route path="/ContactUs" exact>
        <ContactUs/>
        </Route>
        </Switch>
        </AnimatePresence>
         </div>
    );
}


export default App;