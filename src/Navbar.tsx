import React from 'react';
import './css/Navbar.css';

export function Navbar() {
  return (
    <nav>
      <h1>ODS</h1>
      <ul>
        <li><a href="/">Accueil</a></li>
        <li><a href="/about">À propos</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}