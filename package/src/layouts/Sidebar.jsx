import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import user1 from "../assets/images/users/user3.jpg";
import probg from "../assets/images/bg/download1.jpg";


const navigation = [
  {
    title: "Dashboard",
    href: "/starter",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Presentar EEIS",
    href: "/alerts",
    icon: "bi bi-bell",
  },
  {
    title: "Archivo",
    href: "/badges",
    icon: "bi bi-patch-check",
  },
  {
    title: "Imprimir",
    href: "/buttons",
    icon: "bi bi-hdd-stack",
  },
  {
    title: "Mapas",
    href: "/cards",
    icon: "bi bi-card-text",
  },
  {
    title: "Denuncias",
    href: "/grid",
    icon: "bi bi-columns",
  },
  {
    title: "Tablas",
    href: "/table",
    icon: "bi bi-layout-split",
  },
  {
    title: "Forms",
    href: "/forms",
    icon: "bi bi-textarea-resize",
  },
  {
    title: "Breadcrumbs",
    href: "/breadcrumbs",
    icon: "bi bi-link",
  },
  {
    title: "About",
    href: "/about",
    icon: "bi bi-people",
  },
  {
    title: "FuenteSonora",
    href: "/FuenteSonora",
    icon: "bi bi-speedometer2",
  },
  {
    title: "DragAndDrop",
    href: "/Ejemplo",
    icon: "bi bi-speedometer2",
  },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div>
      <div className="d-flex align-items-center"></div>
      <div
        className="profilebg"
        style={{ background: `url(${probg}) no-repeat` }}
      >
        <div className="p-3 d-flex">
          <img src={user1} alt="user" width="50" className="rounded-circle" />
          <Button
            color="white"
            className="ms-auto text-white d-lg-none"
            onClick={() => showMobilemenu()}
          >
            <i className="bi bi-x"></i>
          </Button>
        </div>
        <div className="bg-dark text-white p-2 opacity-75">Técnico 01</div>
      </div>
      <div className="p-3 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "active nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
          <Button
            color="danger"
            tag="a"
            target="_blank"
            className="mt-3"
            href="https://lapaz.bo/"
          >
            Página Oficial Alcaldía
          </Button>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
