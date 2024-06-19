// import { NavLink } from "react-router-dom";

import "../styles_components/PriceComponent.css";

function PriceComponent() {
  return (
    <section className="global-container-screen-register">
      {/* ----- Visual indicating the progress of registration => level 0 ----- */}
      <progress
        className="advanced-line-0"
        name="Barre de progression"
        max="100"
        value="63"
      />
    </section>
  );
}

export default PriceComponent;
