import React from 'react';
import { AreaHerder } from './styled';
import { Link } from 'react-router-dom';

function Herder() {
    return (
        <AreaHerder>
            <div className="container">
                <div className="logo">
                    <img src= "logo.png"/>
                </div>

                <nav>
                    <ul>
                        <li><Link to="/">Início</Link></li>
                        <li><Link to="/config">Configurações</Link></li>
                        <li><a href="">Sair</a></li>
                    </ul>
                </nav>
            </div>
        </AreaHerder>
    );
}

export default Herder;