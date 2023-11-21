import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; 


const NavigationBar = () => {
    return (
        <nav>

            <ul>
                <li><img src={"LogoGreen.svg"} alt="Logo" /></li>
                <li>
                    <li><Link to="/">Homepage</Link></li>
                    <li><Link to="/AgroforstWirtschaft">AgroforstWirtschaft</Link></li>
                    <li><Link to="/Aktuelles">Aktuelles</Link></li>
                    <li><Link to="/GartenDesign">GartenDesign</Link></li>
                    <li><Link to="/HolzschePermakultur">HolzschePermakultur</Link></li>
                    <li><Link to="/Kontakt">Kontakt</Link></li>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationBar;
