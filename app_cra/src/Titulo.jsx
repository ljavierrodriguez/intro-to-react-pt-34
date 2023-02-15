import React from 'react';

export class Titulo extends React.Component {
    render(){
        return (
            <h2 style={{ color: 'gray', fontFamily: 'cursive' }}>{this.props.texto}</h2> // JSX
        )
    }
} 

