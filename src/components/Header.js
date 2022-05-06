import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
<meta name="viewport" content="width=device-width, initial-scale=1"></meta>



class Header extends React.Component {
    render() {
        return (
            <section className="top-nav">
            <div>
              Bibliothèque de Félix
            </div>
            <label className='menu-button-container' htmlFor="menu-toggle">
            <div className='menu-button'></div>
          </label>
            <ul className="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/ajouter">Ajouter un livre</Link></li>
            </ul>
          </section>
        );
    }
}

export default Header;