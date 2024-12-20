import getDataUtilisateur from "../../api/udata";
import { Link, useNavigate } from "react-router-dom";

import { BsGearFill, BsGear, BsBell, BsPower } from "react-icons/bs";

export default function ProfilHeader() {
  const navigate = useNavigate();
  const u_info = getDataUtilisateur();

  const seDeconnecterDuSession = (event) => {
    event.preventDefault();
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <li className="nav-item dropdown">
        <a
          className="dropdown-toggle profile-pic"
          data-toggle="dropdown"
          href="#"
          aria-expanded="false"
        >
          <img
            src={
              process.env.REACT_APP_SUN_COMPLET_URL +
              `uploads/${u_info.u_photoPDP}`
            }
            alt="pdp"
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          />
          {/* <img 
            // src={process.env.PUBLIC_URL + `/picture/pdp/directeur.png`}
            // src={process.env.PUBLIC_URL + `/picture/pdp/secretaire.png`}
            // src={process.env.PUBLIC_URL + `/picture/pdp/chefProjet.png`}
            // src={process.env.PUBLIC_URL + `/picture/pdp/comptable.png`}
            alt="pdp"
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          /> */}
          <span>
            {u_info.u_identification}
            {/* Bouchaib Fatima */}
            {/* Mekki Rachid */}
            {/* El Idrissi Ahmed */}
            {/* Tahiri Khalid */}
          </span>
        </a>
        <ul className="dropdown-menu dropdown-user">
          <li>
            <div className="user-box">
              <div className="u-img">
                <img
                  src={
                    process.env.REACT_APP_SUN_COMPLET_URL +
                    `uploads/${u_info.u_photoPDP}`
                  }
                  // src={process.env.PUBLIC_URL + `/picture/pdp/chefProjet.png`}
                  alt="pdp"
                />
              </div>
              <div className="u-text">
                <h4>
                  {u_info.u_identification}
                  {/* El Idrissi Ahmed{" "} */}
                </h4>
                <p className="text-muted">
                  {u_info.u_nom}
                  {/* ElIdrissiAhmed */}
                  @gmail.com
                </p>
                <Link
                  to="/mesDossiers/"
                  className="btn btn-rounded btn-danger btn-sm"
                >
                  Mes Projets
                </Link>
              </div>
            </div>
          </li>
          <div className="dropdown-divider"></div>
          
          <div className="dropdown-divider"></div>
          <a
            className="dropdown-item"
            href="#"
            onClick={(e) => seDeconnecterDuSession(e)}
          >
            <i className="fa fa-power-off"></i> Se déconnecter
          </a>
        </ul>
      </li>
    </>
  );
}
