import React from 'react';
import ReactDOM from 'react-dom';

const headline = "pipey McPipeface";

ReactDOM.render(
    <div>{headline}</div>,
    document.getElementById('app')
);

console.log("PIPELINE entry point");


module.hot.accept();
