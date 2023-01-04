import React from "react";

export function Home() {
  return (
    <>
      <div className="container">
        <h1 className="title">
          Bienvenue sur le site de la communauté Star-Citizen ODS!
        </h1>
        <p className="subtitle">
          Notre site est dédié à la communauté de joueurs de Star-Citizen et à
          notre entreprise ODS, spécialisée dans le commerce intergalactique.
          Rejoignez-nous pour échanger sur le jeu, découvrir les dernières
          nouveautés et trouver de nouvelles opportunités de commerce!
        </p>
        <img src="logo.png" alt="Logo ODS" className="image is-128x128" />
        <h2 className="subtitle">Menu</h2>
        <div className="tabs is-centered">
          <ul>
            <li className="is-active">
              <a>Accueil</a>
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
        </div>
        <h2 className="subtitle">Suivez-nous</h2>
        <p>Rejoignez notre communauté sur les réseaux sociaux:</p>
        <div className="buttons">
          <a
            className="button is-primary"
            href="https://twitter.com/ods_starcitizen"
          >
            <span className="icon">
              <i className="fab fa-twitter"></i>
            </span>
            <span>Twitter</span>
          </a>
        </div>
      </div>
    </>
  );
}
