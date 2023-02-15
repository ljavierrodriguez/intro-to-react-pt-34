import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Class Component
/* class App extends React.Component {
    render(){
        return (
            <h1>Bienvenido, {this.props.name} {this.props.lastname}</h1> // JSX
        )
    }
} 
 */

// Function Component
/* function App(props){ // Los props son un objecto { name: 'John', lastname: 'Doe' }
    return (
        <h1>Bienvenido, {props.name} {props.lastname}</h1>
    )
} */


ReactDOM.createRoot(document.getElementById('root')).render(<App name="John" lastname="Doe" />);