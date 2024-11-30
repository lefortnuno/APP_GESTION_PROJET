import Context from "../../contexts/Context";
import HeaderContext from "../../contexts/header/header.context";
import SidebarContext from "../../contexts/sidebar/sidebar.context";
import FooterContext from "../../contexts/footer/footer.context";

import { useNavigate } from "react-router-dom";

export default function AddPhase() {
  const navigate = useNavigate();
  function onClose() {
    navigate("/procedure/");
  }
  return (
    <>
      <Context>
        <div className="monContainer">
          <header>Ajout Nouveau Phase</header>

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
                    <label>Livrable :</label>

                    <select
                      name="unite" 
                      autoComplete="off"
                    >
                      <option value={true}>LIV101-Cahier des charges</option>
                      <option value="">LIV102-Spécifications techniques</option>
                      <option value="">LIV103-Plan de projet</option>
                      <option value="">LIV104-Maquettes UI</option>
                      <option value="">
                        LIV105-Rapport de tests unitaires
                      </option>
                    </select>
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
