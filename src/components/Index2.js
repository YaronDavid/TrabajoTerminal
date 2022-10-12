import React from 'react';
import NavBar from './NavBar.js'
import Carrusel from './Carrusel'
import Banner from './Banner.js';


export default function Index2() {
    return (
        <>
            <Carrusel />
            <Banner />
            <a className="btn btn-primary" href="./Login.js">Login</a>
        </>
    );
}