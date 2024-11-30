import getDataUtilisateur from "../../api/udata";

export default function ProfilSidebar() {
  const u_info = getDataUtilisateur();
  return (
    <>
      <div className="user">
        <div className="photo">
          <img
            src={process.env.PUBLIC_URL + `/picture/pdp/${u_info.u_photoPDP}`}
            alt="pdp"
          />
        </div>
        <div className="info">
          <a
            className=""
            data-toggle="collapse"
            href="#collapseExample"
            aria-expanded="true"
          >
            <span>
              {u_info.u_identification}
              <span className="user-level">{u_info.u_attribut}</span>
            </span>
          </a>
          <div className="clearfix"></div>
        </div>
      </div>

      {/* <div className="user">
        <div className="photo">
          <img
            src={process.env.PUBLIC_URL + `/picture/pdp/directeur.png`}
            alt="pdp"
          />
        </div>
        <div className="info">
          <a
            className=""
            data-toggle="collapse"
            href="#collapseExample"
            aria-expanded="true"
          >
            <span>
              Bouchaib Fatima 
              <span className="user-level"> 
                Directeur 
              </span> 
            </span>
          </a>
          <div className="clearfix"></div>
        </div>
      </div> */}

      {/* <div className="user">
        <div className="photo">
          <img
            src={process.env.PUBLIC_URL + `/picture/pdp/secretaire.png`}
            alt="pdp"
          />
        </div>
        <div className="info">
          <a
            className=""
            data-toggle="collapse"
            href="#collapseExample"
            aria-expanded="true"
          >
            <span> 
              Mekki Rachid 
              <span className="user-level"> 
                Sécretaire 
              </span> 
            </span>
          </a>
          <div className="clearfix"></div>
        </div>
      </div> */}

      {/* <div className="user">
        <div className="photo">
          <img
            src={process.env.PUBLIC_URL + `/picture/pdp/chefProjet.png`}
            alt="pdp"
          />
        </div>
        <div className="info">
          <a
            className=""
            data-toggle="collapse"
            href="#collapseExample"
            aria-expanded="true"
          >
            <span>
              El Idrissi Ahmed
              <span className="user-level">Chef de projet </span>
            </span>
          </a>
          <div className="clearfix"></div>
        </div>
      </div> */}

      {/* <div className="user">
        <div className="photo">
          <img
            src={process.env.PUBLIC_URL + `/picture/pdp/comptable.png`}
            alt="pdp"
          />
        </div>
        <div className="info">
          <a
            className=""
            data-toggle="collapse"
            href="#collapseExample"
            aria-expanded="true"
          >
            <span>
              Tahiri Khalid
              <span className="user-level">Comptable</span>
            </span>
          </a>
          <div className="clearfix"></div>
        </div>
      </div> */}
    </>
  );
}
