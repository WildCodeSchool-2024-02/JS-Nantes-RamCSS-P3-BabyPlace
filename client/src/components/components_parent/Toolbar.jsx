import "./Toolbar.css";

function Toolbar() {
  return (
    <div className="toolbar">
      <div className="nav-toolbar">
        <img src="src/assets/images/icônes/Icône menu.png" alt="Menu" />
      </div>
      <div className="nav-toolbar">
        <img src="src/assets/images/icônes/Icône search.png" alt="Search" />
      </div>
      <div className="nav-toolbar">
        <img src="src/assets/images/icônes/Icône user.png" alt="User" />
      </div>
      <div className="nav-toolbar">
        <img
          src="src/assets/images/icônes/Icône notifications.png"
          alt="Notifications"
        />
      </div>
      <div className="nav-toolbar">
        <img src="src/assets/images/icônes/Icône message.png" alt="Messages" />
      </div>
    </div>
  );
}

export default Toolbar;
