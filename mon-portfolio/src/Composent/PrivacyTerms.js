import React from "react";
import { Link } from "react-router-dom";

function PrivacyTerms() {
  return (
    <>
      {/*==================================================*/}
      {/* Start Toptech Breadcumb Area */}
      {/*==================================================*/}
      <div className="breadcumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-content">
                <h4>Privacy & Terms </h4>
                <ul>
                  <li><Link to="index.html">Home</Link></li>
                  <li>&gt;</li>
                  <li>Privacy & Terms </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Toptech Breadcumb Area */}
      {/*==================================================*/}

      {/*==================================================*/}
      {/* Start Privacy Policy Section */}
      {/*==================================================*/}
      <div className="privacy-policy-area">
        <div className="container">
          <h1>Politique de Confidentialité</h1>
          <p>
            Cette politique de confidentialité décrit comment nous collectons, utilisons, et protégeons vos informations personnelles lorsque vous utilisez notre site web.
          </p>

          <h2>1. Informations Collectées</h2>
          <p>
            Nous pouvons collecter les types d'informations suivants :
            <ul>
              <li>Informations personnelles (nom, e-mail, téléphone, etc.)</li>
              <li>Données de navigation (cookies, adresses IP, etc.)</li>
              <li>Informations de paiement (si applicable)</li>
            </ul>
          </p>

          <h2>2. Utilisation des Informations</h2>
          <p>
            Nous utilisons vos informations pour :
            <ul>
              <li>Améliorer notre service et personnaliser votre expérience</li>
              <li>Communiquer avec vous</li>
              <li>Envoyer des mises à jour et des offres promotionnelles</li>
            </ul>
          </p>

          <h2>3. Partage des Informations</h2>
          <p>
            Nous ne partageons pas vos informations personnelles avec des tiers, sauf dans les cas suivants :
            <ul>
              <li>Avec votre consentement</li>
              <li>Pour respecter la loi ou protéger nos droits</li>
            </ul>
          </p>

          <h2>4. Sécurité des Données</h2>
          <p>
            Nous prenons des mesures de sécurité appropriées pour protéger vos informations personnelles contre les accès non autorisés, la divulgation, l'altération ou la destruction.
          </p>

          <h2>5. Vos Droits</h2>
          <p>
            Vous avez le droit de :
            <ul>
              <li>Accéder à vos informations personnelles</li>
              <li>Demander la rectification de vos données</li>
              <li>Demander l'effacement de vos données</li>
              <li>Vous opposer au traitement de vos données</li>
            </ul>
          </p>

          <h2>6. Modifications de la Politique</h2>
          <p>
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page.
          </p>

          <h2>7. Contact</h2>
          <p>
            Si vous avez des questions concernant cette politique, vous pouvez nous contacter à :
            <br />
            <strong>Email :</strong> support@votreentreprise.com
          </p>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Privacy Policy Section */}
      {/*==================================================*/}
    </>
  );
}

export default PrivacyTerms;