import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    const hello = <h1>Hello World, from React</h1>


    // https://reactjs.org/docs/react-dom.html#render
    // the root is referencing <div id="root"> in index.html

    // we want to render the App component from './app';
    ReactDOM.render(<App />, root);
});