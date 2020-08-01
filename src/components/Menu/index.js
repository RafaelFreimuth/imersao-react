import React from 'react';
import Logo from '../../assets/img//logo.png'
import './menu.css'
import Button from '../Button';

function Menu() {
    return (
        <nav className="menu">
            <a href="/">
                <img src={Logo} className="logo" alt="BettaFlix logo"/>
            </a>
            <Button 
                className="buttonLink" 
                href="/">
                    Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu;