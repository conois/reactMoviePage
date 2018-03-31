
import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const NavBar= () => (
    <div className='menuBar'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Peliculas">Peliculas</Link>
        </li>
        <li>
          <Link to="/series">Series</Link>
        </li>
		<li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </div>

);

export default NavBar;