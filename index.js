import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';



// Class Component
/* class ClassApp extends Component {
    render(){
        return (
            <h1>Bienvenido, {this.props.name} {this.props.lastname}</h1> // JSX
        )
    }
}  */


// Function Component
/* function FunctionApp(props){ // Los props son un objecto { name: 'John', lastname: 'Doe' }
    return (
        <h1>Bienvenido, {props.name} {props.lastname}</h1>
    )
} */


ReactDOM.createRoot(document.getElementById('root')).render(<ClassApp name="John" lastname="Doe" />);