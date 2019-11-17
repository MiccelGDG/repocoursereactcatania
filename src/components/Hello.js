import React from 'react';

//Metodo alternativo per exportare il componente funzionale

// versione del componente JSX
export const Hello = (props) => 
<div id="hello" className="antani ciao">

<h1>Ciao da {props.name}. Lavoro : {props.work}</h1>
{props.children}
</div>  

//versione del componente implementato con la libreria di React
/* export const Hello = (props) =>React.createElement(
    'div',
    {id:"hello", className: "antani ciao"},
    React.createElement('h1', null, `Ciao da ${props.name}. Lavoro: ${props.work}`),React.createElement('div',props.children)
    ); */