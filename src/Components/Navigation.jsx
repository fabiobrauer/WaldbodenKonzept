import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; 


const NavigationBar = () => {
    return (
        <nav>

            <ul>
                <li><Link to="/"><img src={"LogoGreen.svg"} alt="Logo" /></Link></li>
                <li>
                    <li><Link to="/">Homepage</Link></li>
                    <li><Link to="/AgroforstWirtschaft">Agroforst Wirtschaft</Link></li>
{/*                     <li><Link to="/Aktuelles">Aktuelles</Link></li> */}
                    <li><Link to="/GartenDesign">Garten-Design</Link></li>
                    <li><Link to="/HolzschePermakultur">Holz'sche Permakultur</Link></li>
                    <li><Link to="/Kontakt">Kontakt</Link></li>
                    <li><Link to="/PermakulturWorkshopchangdao">Permakultur Workshop Chiang Dao</Link></li>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationBar;
