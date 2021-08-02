import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
// import pages 
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
// Router 
import {Switch,Route} from 'react-router-dom';

function App(){
    return(
        <div className = "App"> 
        <GlobalStyle/>
        <Nav/>
        <switch>
        <Route path="/" exact>
        <AboutUs/>
        </Route>
        <Route path="/Work" exact>
        <OurWork/>
        </Route>
        <Route path="/ContactUs" exact>
        <ContactUs/>
        </Route>
        </switch>
         </div>
    );
}


export default App;