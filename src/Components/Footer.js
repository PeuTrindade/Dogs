import React from 'react';
import Styles from "./Footer.module.css";
import {ReactComponent as Dogs} from '../Assets/dogs-footer.svg';

const Footer = () => {
    return (
        <footer>
         <Dogs/>
         <p>Dogs. Alguns direitos reservados</p> 
        </footer>
    )
}

export default Footer;
