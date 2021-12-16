import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = ({titleWeb}) => {

    const currentYear = new Date().getFullYear();
    const copyRightText = `2016 - ${currentYear} ${titleWeb}.com - Todos derechos Reservados.`

    return (<Container>
        <p> {copyRightText} </p>
    </Container> );
}
 
export default Footer;