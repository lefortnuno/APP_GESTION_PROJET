import axios from "../../api/axios";
import getDataUtilisateur from "../../api/udata";

import HeaderContext from "../../contexts/header/header.context";
import FooterContext from "../../contexts/footer/footer.context";
import SidebarContext from "../../contexts/sidebar/sidebar.context";

import ModalEditEtat from "../dossiers/ModifEtats";
import FacturerCePhase from "../dossiers/FacturerCePhase";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { BsEye, BsPencilSquare, BsTrash } from "react-icons/bs";

import { facturations } from "../../api/data_array.js";

const base = `terrain`;
const URL_DE_BASE = base + `/`;

export default function Terrain() {
  const navigate = useNavigate();
  const u_info = getDataUtilisateur();

  const [showEdit, setShowEdit] = useState(false);
  const handleCloseModal = () => setShowEdit(false);
  const [showFacturation, setShowFacturation] = useState(false);
  const handleCloseModalFact = () => setShowFacturation(false);
  //#region //------------DONNEE UTILISATEUR------------
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get(URL_DE_BASE, u_info.opts).then(function (response) {
      if (response.status === 200) {
        setUsers(response.data);
        console.log(response.data);
      } else {
        toast.warning("Vous n'êtes pas autorisé à accéder à cette page!");
      }
    });
  }
  //#endregion

  //#region   //----- MA RECHERCHE -----
  const [contenuTab, setContenuTab] = useState(false);
  function rechercheElement(event) {
    const valeur = event.target.value;
    const valeurs = { value: valeur };

    if (!valeur) {
      getUsers();
      setContenuTab(false);
    } else {
      axios
        .post(URL_DE_BASE + `recherche/`, valeurs, u_info.opts)
        .then((response) => {
          if (response.data.success) {
            setUsers(response.data.res);
            setContenuTab(true);
          } else {
            setUsers(response.data.res);
            setContenuTab(false);
          }
        });
    }
  }
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
  const nbrPage = Math.ceil(users.length / itemsPerPage);
  for (let i = 1; i <= nbrPage; i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = facturations.slice(indexOfFirstItem, indexOfLastItem);

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
        <HeaderContext>
          <form className="navbar-left navbar-form nav-search mr-md-3">
            <div className="input-group">
              <input
                type="text"
                name="searchValue"
                placeholder="Rechercher ...."
                className="form-control"
                autoComplete="off"
                onClick={retourALaPremierPage}
                onChange={rechercheElement}
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
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center row">
                      <h4 className="card-title col-md-2">
                        Liste des Phases/Comptables
                      </h4>
                      <div className="filters d-flex gap-3 align-items-center col-md-10 row">
                        <div className="date-filter d-flex align-items-center col-md-6">
                          {" "}
                          <input
                            type="date"
                            id="startDate"
                            className="form-control me-2"
                          />
                          <label htmlFor="endDate" className="me-2">
                            ---
                          </label>
                          <input
                            type="date"
                            id="endDate"
                            className="form-control"
                          />
                        </div>

                        <div className="status-filter d-flex gap-2 col-md-6 row">
                          <select className="form-select col-md-4">
                            <option value="">Réalisation</option>
                            <option value="terminee">Terminée</option>
                            <option value="non-terminee">Non terminée</option>
                          </select>
                          <select className="form-select col-md-4">
                            <option value="">Facturation</option>
                            <option value="facturee">Facturée</option>
                            <option value="non-facturee">Non facturée</option>
                          </select>
                          <select className="form-select col-md-4">
                            <option value="">Paiement</option>
                            <option value="paye">Payé</option>
                            <option value="non-paye">Non payé</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="card-body">
                      <div className="row">
                        <div className="card col-12">
                          <div className="card-body">
                            <div className="table-responsive text-nowrap">
                              <table className="table table-striped w-auto">
                                <thead>
                                  <tr>
                                    <th scope="col">Code</th>
                                    <th scope="col">Projet</th>
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
                                  {users.length !== 0 ? (
                                    currentItems.map((user, key) => (
                                      <tr key={key}>
                                        <th scope="row">{user.codeProjet} </th>
                                        <td>{user.LibelleProjet}</td>
                                        <td>{user.libellePhase}</td>
                                        <td>{user.description}</td>
                                        <td>{user.dateDebut}</td>
                                        <td> {user.dateFin}</td>
                                        <td>{user.equipe}</td>
                                        <td>{user.montant} €</td>
                                        <td
                                          style={{ cursor: "pointer" }}
                                          onClick={() =>
                                            setShowFacturation(true)
                                          }
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
                                            {/* Modifier une phase en indiquant les livrables ou son état de clôture. */}
                                            {/* Modifier les états de facturation et de paiement des phases terminées. */}
                                            {/* ▪ Facturer les phases terminées. */}
                                            <BsPencilSquare
                                              onClick={() => setShowEdit(true)}
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
            </div>
          </div>

          <ModalEditEtat showEdit={showEdit} onHide={handleCloseModal} />
          <FacturerCePhase
            showFacturation={showFacturation}
            onHide={handleCloseModalFact}
          />
          <FooterContext />
        </div>
      </div>
    </>
  );
}
