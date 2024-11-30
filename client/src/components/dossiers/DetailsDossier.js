import axios from "../../api/axios";
import getDataUtilisateur from "../../api/udata";

// import { libraryList, AjoutLibrary } from "../../api/file.js";

import HeaderContext from "../../contexts/header/header.context";
import FooterContext from "../../contexts/footer/footer.context";
import SidebarContext from "../../contexts/sidebar/sidebar.context";
import ModalAjout from "../historique/ModalAjout";
import ModalEditEtat from "./ModifEtats";
import FacturerCePhase from "./FacturerCePhase";
import ClotureLivrable from "./ClotureLivrable";
import ModalEditChefProjet from "./ModalEditChefProjet";

import { useEffect, useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { toast } from "react-toastify";
import { useNavigate, Link, useParams } from "react-router-dom";
import { BsPeaceFill, BsPencilSquare } from "react-icons/bs";
import { historiquePR001, documents } from "../../api/data_array";

const base = `dossier`;
const URL_DE_BASE = base + `/`;
const URL_HISTO = `historique/`;
const URL_SOUS_DOSSIER = `sousDossier/`;
const URL_IM_TERRAIN = `terrain/`;

export default function DetailsDossier() {
  //#region // MES VARIABLE
  const navigate = useNavigate();
  const u_info = getDataUtilisateur();
  const { numeroDossier } = useParams();

  const [showEdit, setShowEdit] = useState(false);
  const handleCloseModal = () => setShowEdit(false);
  const [showFacturation, setShowFacturation] = useState(false);
  const handleCloseModalFact = () => setShowFacturation(false);
  const [showLivrableCloture, setShowLivrableCloture] = useState(false);
  const handleCloseModalLivrable = () => setShowLivrableCloture(false);
  const [showEquipeProjetChef, setShowEquipeProjetChef] = useState(false);
  const handleCloseModalEquipe = () => setShowEquipeProjetChef(false);

  const mesInputsDecompte = {
    prixTerrain: "",
  };
  const mesInputsTerrain = {
    prixTerrain: "",
  };
  //#endregion

  //#region // IMPRIMER UN DOC
  const compRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => compRef.current,
    documentTitle: "Decompte Prix du Terrain",
    onAfterPrint: () => toast.success("Impression du document Reussi"),
  });
  //#endregion

  //#region // RECUPERER LES DONNEER DU DOSSIER
  const [users, setUsers] = useState([]);
  const [histo, setHisto] = useState([]);
  const [inputsDecompte, setInputsDecompte] = useState(mesInputsDecompte);
  const [inputsTerrain, setInputsTerrain] = useState(mesInputsTerrain);

  useEffect(() => {
    getOneUser();
    getHistoDossier();
  }, []);

  function getOneUser() {
    axios
      .get(URL_DE_BASE + `${numeroDossier}`, u_info.opts)
      .then(function (response) {
        if (response.status === 200) {
          const u = response.data[0];
          console.log("detail ", u);
          setUsers(u);

          if (u.p_numeroProcedure >= 9) {
            getDecompte(u.numeroDossier);
          }
          if (u.p_numeroProcedure >= 9) {
            getTerrain(u.cin, u.p_numeroRequerant, u.numeroDossier);
          }
        } else {
          toast.warning("Vous n'êtes pas autorisé à accéder à cette page!");
        }
      });
  }

  function getHistoDossier() {
    axios
      .get(URL_HISTO + `histoDossier/` + `${numeroDossier}`, u_info.opts)
      .then(function (response) {
        if (response.status === 200) {
          setHisto(response.data);
          console.log(response.data);
        } else {
          toast.warning("Vous n'êtes pas autorisé à accéder à cette page!");
        }
      });
  }

  //#endregion

  //#region // RECUPERER LE TERRAIN EN QUESTION
  function getTerrain(cin, numeroRequerant, numeroDossier) {
    const valeur_de_recherche = {
      cin,
      numeroDossier,
      numeroRequerant,
    };
    axios
      .post(URL_IM_TERRAIN + `le_Terrain/`, valeur_de_recherche, u_info.opts)
      .then(function (response) {
        if (response.status === 200) {
          setInputsTerrain(response.data[0]);
        }
      });
  }
  //#endregion

  //#region // RECUPERER LA DERNIERE SOUS DOSSIER
  function getDecompte(xxx) {
    axios
      .get(URL_SOUS_DOSSIER + `decompte/` + `${xxx}`, u_info.opts)
      .then(function (response) {
        if (response.status === 200) {
          const dataDecompte = response.data[0];
          let arrPrixT = dataDecompte.prixTerrain;

          // Arrondir la somme a payer de 02 dezaine d'unite
          let arr = arrPrixT.split(".");
          let str = "";

          arr.forEach((e) => {
            str = str + e;
          });
          str = str / 100;
          str = Math.round(str);
          str = str * 100;
          str = new Intl.NumberFormat("de-DE").format(str);

          const inputsDecompteComplet = Object.assign(dataDecompte, {
            prixTerrainAroundi: str,
          });

          setInputsDecompte(inputsDecompteComplet);
        }
      });
  }
  //#endregion

  //#region //------------ MODAL AJOUT C_ ------------
  const [numCompteAjout, setNumCompteAjout] = useState("");
  const [show, setShow] = useState(false);
  const showAddModal = (numCompte) => {
    setNumCompteAjout(numCompte);
    setShow(true);
  };
  const closeAddModal = () => {
    getOneUser();
    getHistoDossier();
    setShow(false);
  };
  //#endregion

  //#region //------------ MODAL AJOUT AVC ------------
  const [numAffDossier, setNumAffDossier] = useState("");
  // const [show, setShow] = useState(false);
  // const showAddModal = (numCompte) => {
  // 	setNumCompteAjout(numCompte);
  // 	setShow(true);
  // };
  // const closeAddModal = () => {
  // 	getOneUser();
  // 	getHistoDossier();
  // 	setShow(false);
  // };
  //#endregion

  //#region  //----- MY PAGINATION -----
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  function retourALaPremierPage() {
    setcurrentPage(1);
    if (currentPage > 5) {
      setmaxPageNumberLimit(5);
      setminPageNumberLimit(0);
    }
  }

  const pages = [];
  const nbrPage = Math.ceil(histo.length / itemsPerPage);
  for (let i = 1; i <= nbrPage; i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = historiquePR001.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage == number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);
    if (currentPage - 2 < minPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  //#endregion

  return (
    <>
      {/* {libraryList.forEach((x) => AjoutLibrary(x))} */}

      <div className="wrapper">
        <ModalAjout show={show} onHide={closeAddModal}>
          {numCompteAjout}
        </ModalAjout>

        <HeaderContext>
          <form className="navbar-left navbar-form nav-search mr-md-3">
            <div className="input-group">
              <input
                type="text"
                name="searchValue"
                placeholder="Rechercher ...."
                className="form-control"
                autoComplete="off"
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  <i className="la la-search search-icon"></i>
                </span>
              </div>
            </div>
          </form>
        </HeaderContext>

        <SidebarContext />

        <div className="main-panel">
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-7">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">INFO ORGANISME CLIENT</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label style={{ fontWeight: "bold" }}>Code :</label>
                            <span> ORG001 </span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label style={{ fontWeight: "bold" }}>Nom :</label>
                            <span> Agence Urbaine de Casablanca </span>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label style={{ fontWeight: "bold" }}>
                              Adresse :
                            </label>
                            <span> Rue Allal El Fassi, Casablanca </span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label style={{ fontWeight: "bold" }}>
                              Téléphone :
                            </label>
                            <span> 0522-345678 </span>
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="form-group">
                            <label style={{ fontWeight: "bold" }}>
                              Nom contact :
                            </label>
                            <span> Ahmed Ben Ali </span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label style={{ fontWeight: "bold" }}>
                              Email contact :
                            </label>
                            <span> contact@aucasablanca.ma</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label style={{ fontWeight: "bold" }}>
                              Adresse web :
                            </label>
                            <span> https://aucasablanca.ma </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-5">
                  <div className="card">
                    <div className="card-header ">
                      <h4 className="card-title">INFORMATION DU PROJET</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label style={{ fontWeight: "bold" }}>
                                Code :
                              </label>
                              <span> PR001 </span>
                            </div>

                            <div className="form-group col-md-6">
                              <label style={{ fontWeight: "bold" }}>
                                Nom :{" "}
                              </label>
                              <span> Développement d'un ERP</span>
                            </div>

                            <div className="form-group col-md-6">
                              <label style={{ fontWeight: "bold" }}>
                                Chef de Projet :{" "}
                              </label>
                              <span> El Idrissi Ahmed </span>
                            </div>

                            <div className="form-group col-md-6">
                              <label style={{ fontWeight: "bold" }}>
                                Montant :{" "}
                              </label>
                              <span> 120.000 €</span>
                            </div>
                            <div className="form-group col-md-6">
                              <label style={{ fontWeight: "bold" }}>
                                Date de début :{" "}
                              </label>
                              <span> 10-01-2024</span>
                            </div>
                            <div className="form-group col-md-6">
                              <label style={{ fontWeight: "bold" }}>
                                Date de début :{" "}
                              </label>
                              <span> 30-06-2024</span>
                            </div>
                            <div className="form-group col-md-12">
                              <label style={{ fontWeight: "bold" }}>
                                Description :
                              </label>
                              <span>
                                {" "}
                                Concevoir et à implémenter un logiciel intégré
                                permettant de centraliser et de gérer les
                                ressources humaines de lentreprise.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <div className="card col-12">
                      <div className="card-header">
                        <h4 className="card-title">
                          {" "}
                          PHASES de PR001: "Développement d'un ERP"{" "}
                        </h4>
                      </div>
                      <div className="card-body">
                        <div className="table-responsive text-nowrap">
                          <table className="table table-striped w-auto">
                            <thead>
                              <tr>
                                <th scope="col">Code</th>
                                <th scope="col">Phase</th>
                                <th scope="col">Description</th>
                                <th scope="col">Date_de_début </th>
                                <th scope="col">Date_de_fin_ </th>
                                <th scope="col">Equipe</th>
                                <th scope="col">Montant</th>
                                <th scope="col">Etat réalisation</th>
                                <th scope="col">Etat facturation</th>
                                <th scope="col">Etat paiement</th>
                                <th scope="col">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {histo.length !== 0 ? (
                                currentItems.map((user, key) => (
                                  <tr key={key}>
                                    <th scope="row">{user.CodePhase} </th>
                                    <td>{user.LibellePhase}</td>
                                    <td>{user.DescriptionPhase}</td>
                                    <td>{user.Date_de_debut}</td>
                                    <td> {user.Date_de_fin}</td>
                                    <td
                                      style={{ cursor: "pointer" }}
                                      onClick={() =>
                                        setShowEquipeProjetChef(true)
                                      }
                                    >
                                      {user.Equipe}
                                    </td>
                                    <td>{user.Montant} €</td>
                                    <td
                                      style={{ cursor: "pointer" }}
                                      onClick={() => setShowFacturation(true)}
                                    >
                                      {key / 3 < 2.5
                                        ? "Terminée"
                                        : "Non terminée"}
                                    </td>
                                    <td
                                      style={{ cursor: "pointer" }}
                                      onClick={() => setShowEdit(true)}
                                    >
                                      {key / 3 < 2.1
                                        ? "Facturée"
                                        : "Non facturée"}
                                    </td>
                                    <td
                                      style={{ cursor: "pointer" }}
                                      onClick={() => setShowEdit(true)}
                                    >
                                      {key / 3 < 1.6 ? "Payé" : "Non payé"}
                                    </td>
                                    <td>
                                      <button
                                        type="button"
                                        className="btn btn-outline-primary btn-sm m-1 waves-effect text-primary bg-white"
                                        variant="default"
                                        name="numCompteEdit"
                                        // onClick={() => showEditModal(dossier)}
                                      >
                                        <BsPencilSquare
                                          onClick={() =>
                                            setShowLivrableCloture(true)
                                          }
                                        />
                                      </button>
                                    </td>
                                  </tr>
                                ))
                              ) : (
                                <tr>
                                  <td
                                    colSpan={10}
                                    className="text-danger text-center"
                                  >
                                    La liste est vide ....
                                  </td>
                                </tr>
                              )}
                            </tbody>
                          </table>

                          {nbrPage !== 1 &&
                          nbrPage !== 0 &&
                          users.length !== 0 ? (
                            <>
                              <ul className="pageNumbers">
                                <li>
                                  <button
                                    disabled={
                                      currentPage == pages[0] ? true : false
                                    }
                                    onClick={handlePrevbtn}
                                  >
                                    Précédent
                                  </button>
                                </li>
                                {renderPageNumbers}
                                <li>
                                  <button
                                    disabled={
                                      currentPage == pages[pages.length - 1]
                                        ? true
                                        : false
                                    }
                                    onClick={handleNextbtn}
                                  >
                                    Suivant
                                  </button>
                                </li>
                              </ul>
                              <br />
                            </>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <div className="card col-12">
                      <div className="card-header">
                        <h4 className="card-title">
                          LISTE DOCUMENTS TECHNIQUES PR001: "Développement d'un
                          ERP"{" "}
                        </h4>
                      </div>
                      <div className="card-body">
                        <div className="table-responsive text-nowrap">
                          <table className="table table-striped w-auto">
                            <thead>
                              <tr>
                                <th scope="col">Code</th>
                                <th scope="col">Nom</th>
                                <th scope="col">Description</th>
                                <th scope="col">Dossier </th>
                                <th scope="col">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {histo.length !== 0 ? (
                                documents.map((user, key) => (
                                  <tr key={key}>
                                    <th scope="row">{user.code} </th>
                                    <td>{user.nom}</td>
                                    <td>{user.description}</td>
                                    <td>{user.dossier}</td>

                                    <td>
                                      <button
                                        type="button"
                                        className="btn btn-outline-primary btn-sm m-1 waves-effect text-primary bg-white"
                                        variant="default"
                                        name="numCompteEdit"
                                        // onClick={() => showEditModal(dossier)}
                                      >
                                        <BsPencilSquare
                                          onClick={() =>
                                            setShowLivrableCloture(true)
                                          }
                                        />
                                      </button>
                                    </td>
                                  </tr>
                                ))
                              ) : (
                                <tr>
                                  <td
                                    colSpan={10}
                                    className="text-danger text-center"
                                  >
                                    La liste est vide ....
                                  </td>
                                </tr>
                              )}
                            </tbody>
                          </table>

                          {nbrPage !== 1 &&
                          nbrPage !== 0 &&
                          users.length !== 0 ? (
                            <>
                              <ul className="pageNumbers">
                                <li>
                                  <button
                                    disabled={
                                      currentPage == pages[0] ? true : false
                                    }
                                    onClick={handlePrevbtn}
                                  >
                                    Précédent
                                  </button>
                                </li>
                                {renderPageNumbers}
                                <li>
                                  <button
                                    disabled={
                                      currentPage == pages[pages.length - 1]
                                        ? true
                                        : false
                                    }
                                    onClick={handleNextbtn}
                                  >
                                    Suivant
                                  </button>
                                </li>
                              </ul>
                              <br />
                            </>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ModalEditEtat showEdit={showEdit} onHide={handleCloseModal} />
          <FacturerCePhase
            showFacturation={showFacturation}
            onHide={handleCloseModalFact}
          />
          <ClotureLivrable
            showLivrableCloture={showLivrableCloture}
            onHide={handleCloseModalLivrable}
          />
          <ModalEditChefProjet
            showEquipeProjetChef={showEquipeProjetChef}
            onHide={handleCloseModalEquipe}
          />

          <FooterContext />
        </div>
      </div>
    </>
  );
}
