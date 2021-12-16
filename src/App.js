import React, {Fragment} from 'react';
import NavBar from "./Components/NavBar";
import ListaServicios from './Components/ListaServicios';
import Footer from './Components/Footer';



function App() {

  const titleWeb = "HABBITAT";

  const servicios = [
    {
      nombre:"Pintura Interior Vivienda",
      precio:70
    },
    {
      nombre:"Pintura Exterior Vivienda",
      precio: 120
    }
  ]

 

  

  return (
    <Fragment>
    
      <NavBar
      titleWeb = {titleWeb}
       />
      <ListaServicios
      servicios = {servicios}
       />
      <Footer
      titleWeb = {titleWeb}
       />
    </Fragment>
  );
}

export default App;
