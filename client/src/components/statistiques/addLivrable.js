import Context from "../../contexts/Context";
import HeaderContext from "../../contexts/header/header.context";
import SidebarContext from "../../contexts/sidebar/sidebar.context";
import FooterContext from "../../contexts/footer/footer.context";

import { useNavigate } from "react-router-dom";

export default function AddLivrable() {
  const navigate = useNavigate();
  function onClose() {
    navigate("/stats/");
  }
  return (
    <>
      <Context>
        <div className="monContainer">
          <header>Création Nouveau Livrable</header>

          <form>
            <div className="form first">
              <div className="details personal">
                <div className="fields">
                  <div className="input-field">
                    <label>Libellé :</label>
                    <input
                      type="text"
                      name="identification"
                      autoComplete="off"
                      placeholder="Entrez le nom du livrable"
                    />
                  </div>

                  <div className="input-field">
                    <label>Déscription :</label>
                    <input
                      type="number"
                      min="1"
                      name="x_u_cin"
                      autoComplete="off"
                      placeholder="Entrez la déscription du livrable "
                    />
                  </div>
                  <div className="input-field">
                    <label>Importer le fichier :</label>
                    <input
                      type="file"
                      min="1"
                      name="x_u_cin"
                      autoComplete="off"
                      placeholder="Entrez votre téléphone "
                    />
                  </div>
                </div>
                <div className="buttons">
                  <div className="backBtn btn btn-danger" onClick={onClose}>
                    <span className="btnText"> Annuler</span>
                  </div>

                  <button className="btn btn-success">
                    <span className="btnText"> Enregistrer</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Context>
    </>
  );
}
