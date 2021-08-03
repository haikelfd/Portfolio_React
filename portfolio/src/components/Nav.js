import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";


const Nav = () => {
    return (
<StyledNav>
    <h1>
        <Link id="Logo" to="/">Capture</Link>
        </h1>
        <ul>
        <li>
                <Link to="/">1.About Us</Link>
            </li>
            <li>
                <Link to="/Work">2.Our Work</Link>
            </li>
            <li>
                <Link to="/ContactUs">3.Contact us</Link>
            </li>
        </ul>
    
</StyledNav>
    );
};
const StyledNav =  styled.div`
min-height: 10vh;
display:flex;
margin : auto;
justify-content: space-between;
padding : 1rem 10rem;
background: #282828;
a {
    color: white;
    text-decoration: none;
}
ul{
    display: flex;
    list-style:none;
}
#Logo{
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
}
li{
    padding-left: 10rem;
    position: relative;

}
`;

export default Nav;