import React from 'react';
import ReactDOM from 'react-dom';

const headline = "pipey McPipeface";

const dogs = require('/scripts/dogs').CoolDogs;

ReactDOM.render(
    <div>{headline}</div>,
    document.getElementById('app')
);

console.log("PIPELINE entry point");
