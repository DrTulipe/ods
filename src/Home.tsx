import React from "react";

export function Home() {
  return (
    <>
      <div className="container">
        <h1>Bienvenue sur le site de la communauté Star-Citizen ODS!</h1>
        <p>
          Notre site est dédié à la communauté de joueurs de Star-Citizen et à
          notre entreprise ODS, spécialisée dans le commerce intergalactique.
          Rejoignez-nous pour échanger sur le jeu, découvrir les dernières
          nouveautés et trouver de nouvelles opportunités de commerce!
        </p>
        <img src="logo.png" alt="Logo ODS" />
        <h2>Menu</h2>
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/forum">Forum</a>
          </li>
          <li>
            <a href="/commerce">Commerce</a>
          </li>
          <li>
            <a href="/ods">ODS</a>
          </li>
        </ul>
        <h2>Suivez-nous</h2>

      </div>
    </>
  );
}
