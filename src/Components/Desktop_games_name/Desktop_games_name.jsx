import React from 'react'
import  "./Desktop_games_name.css"
import { Link } from 'react-router-dom'

export default function Desktop_games_name() {
  return (
    <div>
     <ul className="n_games_main ">
    <li className="n_games_items">
      <Link to="/" className="nav-link">
        InPlay
      </Link>
    </li>
    <li className="n_games_items">
       <Link to="/Soccer" className="nav-link">
        Soccer</Link>
     
    </li>
    <li className="n_games_items">
      <Link to="/Tennis" className="nav-link">
        Tennis
      </Link>
    </li>
    <li className="n_games_items">
      <Link to="/Cricket"  className="nav-link">
        Cricket
      </Link>
    </li>
    <li className="n_games_items">
      <a className="nav-link">
        Horse Racing
      </a>
    </li>
    <li className="n_games_items">
      <a  className="nav-link">
        Greyhound Racing
      </a>
    </li>
    <li className="n_games_items">
      <a  className="nav-link">
        Kabaddi
      </a>
    </li>
    <li className="n_games_items">
      <Link to="/Politics" className="nav-link">
        Politics
      </Link>
    </li>
    <li className="n_games_items">
      <a  className="nav-link">
        Casino
      </a>
    </li>
    <li className="n_games_items">
      <a  className="nav-link">
        INT Casino
      </a>
    </li>
    <li className="n_games_items">
      <a  className="nav-link">
        Binary
      </a>
    </li>
  </ul>
    
    
    </div>
  )
}
