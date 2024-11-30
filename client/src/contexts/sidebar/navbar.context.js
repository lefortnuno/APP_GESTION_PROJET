import { Link, useLocation } from "react-router-dom";
import getDataUtilisateur from "../../api/udata";

import {
  BsFolder2Open,
  BsHouse,
  BsPeople,
  BsStickies,
  BsCurrencyDollar,
  BsBook,
} from "react-icons/bs";

export default function NavbarContext() {
  const u_info = getDataUtilisateur();
  const location = useLocation();

  const isActive = (path) => location.pathname === path; // Vérifie si le chemin correspond

  return (
    <>
      <ul className="nav">
        {u_info.u_attribut !== "Usager" ? (
          <>
            <li
              className={`nav-item ${isActive("/individu/") ? "active" : ""}`}
            >
              <Link to="/individu/">
                <i>
                  <BsHouse />
                </i>
                <p> Organismes </p>
                <span className="badge badge-count">3</span>
              </Link>
            </li>
            <li className={`nav-item ${isActive("/dossier/") ? "active" : ""}`}>
              <Link to="/dossier/">
                <i>
                  <BsFolder2Open />
                </i>
                <p> Projets </p>
                <span className="badge badge-count">1</span>
              </Link>
            </li>

            <li
              className={`nav-item ${
                isActive("/utilisateur/") ? "active" : ""
              }`}
            >
              <Link to="/utilisateur/">
                <i>
                  <BsPeople />
                </i>
                <p> Utilisateurs </p>
                <span className="badge badge-count">3</span>
              </Link>
            </li>

            <li
              className={`nav-item ${isActive("/procedure/") ? "active" : ""}`}
            >
              <Link to="/procedure/">
                <i>
                  <BsStickies />
                </i>
                <p> Phases </p>
                <span className="badge badge-count">5</span>
              </Link>
            </li>
            <br />
            <li className={`nav-item ${isActive("/stats/") ? "active" : ""}`}>
              <Link to="/stats/">
                <i>
                  <BsBook />
                </i>
                <p> Livrables </p>
                <span className="badge badge-info">3</span>
              </Link>
            </li>
            <li className={`nav-item ${isActive("/terrain/") ? "active" : ""}`}>
              <Link to="/terrain/">
                <i>
                  <BsCurrencyDollar />
                </i>
                <p>Facturation</p>
                <span className="badge badge-success">3</span>
              </Link>
            </li>
          </>
        ) : null}
      </ul>
    </>
  );
}
