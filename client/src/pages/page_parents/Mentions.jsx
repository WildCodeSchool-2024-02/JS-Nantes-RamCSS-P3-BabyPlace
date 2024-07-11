import NavbarParentDesktop from "../../components/components_parent/NavbarParentDesktop";

import "../styles_parents/mentions.css";

function Mentions() {
  return (
    <section className="global-parent-desktop-page">
      <NavbarParentDesktop />
      <section className="mentions">
        <h2 className="titles">Mentions légales</h2>
        <p className="texts">
          L'agence Dave Warehouse de création de site Web, société par actions
          simplifiées, immatriculée au RCS Nanterre, sous le numéro 830 386 928,
          dont le siège social est sis à 23 ter rue de la Bièvre, 92340
          Bourg-la-Reine, Numéro TVA Intracommunautaire : FR36830387908
        </p>
        <p className="texts">
          Le site Babyplace est hébergé par la société OVH France, société par
          actions simplifiée, immatriculée au RCS Lille Métropole sous le numéro
          424 761 419.
        </p>
        <h2 className="texts adaptatif-text">Propriété Intellectuell</h2>
        <p className="texts">
          Le contenu de ce site est protégé par le droit d’auteur. Toute
          reproduction sans le consentement explicite de l’auteur est
          strictement interdite.
        </p>
        <h2 className="texts adaptatif-text">Responsabilité</h2>
        <p className="texts">
          Les documents, liens et informations contenus sur le site sont
          présentés à titre purement informatif et ne sauraient en aucun cas
          engager notre responsabilité.
        </p>
        <h2 className="texts adaptatif-text">
          Politique de confidentialité & données personnelles
        </h2>
        <p className="texts">
          Babyplace ne collecte des informations personnelles relatives à
          l’utilisateur (nom, adresse e-mail…), que pour le besoin exclusif de
          services proposés par elle-même. Les informations recueillies via le
          formulaire de contact font l’objet d’un traitement informatique
          uniquement destiné à cette prise de contact. Les destinataires des
          données sont uniquement les responsables du site. Aucune donnée ne
          sera transmise à un tiers. Des cookies (fichiers texte contenant des
          informations, enregistrés sur votre ordinateur par votre navigateur
          Internet) peuvent être créés automatiquement par certains services
          utilisés (réseaux sociaux, statistiques, publicités) lors de la
          consultation du site. Ces cookies ne contiennent aucune information
          confidentielle. Le visiteur est libre de les supprimer manuellement ou
          de les bloquer automatiquement à l’aide des fonctions de son
          navigateur. En utilisant notre site Internet, vous consentez à la
          collecte et à l’utilisation de ces données. Conformément à l’article
          34 de la loi « Informatique et Libertés », vous disposez d’un droit
          d’accès, de modification, de rectification et de suppression des
          données recueillies.
        </p>
      </section>
    </section>
  );
}

export default Mentions;
