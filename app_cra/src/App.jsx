import React, { Fragment } from 'react'; // import de un elemento por default
import { Titulo } from './Titulo'; // import de un elemento exportado por no default
import './App.css';

// <Fragment></Fragment> o <></>

function App({ name, lastname }) { // Los props son un objecto { name: 'John', lastname: 'Doe' }
    return (
        <>
            <h1>Bienvenido, {name} {lastname}</h1>
            <Titulo texto="Este es mi primer titulo" />
            <Titulo texto="Este es mi segundo titulo" />
            <Titulo texto="Este es mi tercer titulo" />
            <Titulo texto="Este es mi cuarto titulo" />
        </>
    )
}

export default App;