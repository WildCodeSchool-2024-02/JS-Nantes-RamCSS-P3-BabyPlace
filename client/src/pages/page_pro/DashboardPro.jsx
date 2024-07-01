import NavbarPro from "../../components/components_pro/NavbarPro";

import "../styles_pro_pages/DashboardPro.css";

function DashboardProjsx() {
  return (
    <section className="dashboard-page-container">
      <NavbarPro />
      <h1>DashboardProjsx</h1>
    </section>
  );
}

export default DashboardProjsx;

// unction App() { return <ul> <li> <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink> </li> <li> <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About</NavLink> </li> </ul> }
