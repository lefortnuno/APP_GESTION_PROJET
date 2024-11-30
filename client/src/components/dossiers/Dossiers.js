import axios from "../../api/axios";
import getDataUtilisateur from "../../api/udata";
import ModalEdition from "./ModalEdit";
import ModalEditionDirecteur from "./ModalEditDirecteur";

// import { libraryList, AjoutLibrary } from "../../api/file.js";
import { AccessCahierND } from "../access/accessCahier";
import { NouvelleDemande } from "../access/accessAll";

import HeaderContext from "../../contexts/header/header.context";
import FooterContext from "../../contexts/footer/footer.context";
import SidebarContext from "../../contexts/sidebar/sidebar.context";
import StatisiqueDossier from "../statistiques/stat.dossier";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { BsEye, BsPencilSquare, BsTrash } from "react-icons/bs";
import { projets } from "../../api/data_array";

const base = `dossier`;
const URL_DE_BASE = base + `/`;

export default function Dossier() {
  const navigate = useNavigate();
  const u_info = getDataUtilisateur();

  //#region //------------DONNEE UTILISATEUR------------
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get(URL_DE_BASE, u_info.opts).then(function (response) {
      if (response.status === 200) {
        console.log(response.data);

        setUsers(response.data);
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
    if (!valeur) {
      getUsers();
      setContenuTab(false);
    } else {
      axios
        .get(URL_DE_BASE + `recherche/${valeur}`, u_info.opts)
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
  const [itemsPerPage, setItemsPerPage] = useState(8);

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
  const currentItems = projets.slice(indexOfFirstItem, indexOfLastItem);

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

  //#region //------------MODAL EDIT UTILISATEUR------------
  const [numCompteEdit, setNumCompteEdit] = useState({});
  const [showEdit, setShowEdit] = useState(false);
  const showEditModal = (numCompte) => {
    setNumCompteEdit(numCompte);
    setShowEdit(true);
  };
  const closeEditModal = () => {
    getUsers();
    setShowEdit(false);
  };
  const [showEditDirecteur, setShowEditDirecteur] = useState(false);
  const showEditModalDirecteur = () => {
    setShowEditDirecteur(true);
  };
  const closeEditModalDirecteur = () => {
    getUsers();
    setShowEditDirecteur(false);
  };
  //#endregion

  return (
    <>
      {/* {libraryList.forEach((x) => AjoutLibrary(x))} */}

      <ModalEdition showEdit={showEdit} onHide={closeEditModal}>
        {numCompteEdit}
      </ModalEdition>
      <ModalEditionDirecteur
        showEditDirecteur={showEditDirecteur}
        onHide={closeEditModalDirecteur}
      ></ModalEditionDirecteur>
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
                {/* <AccessCahierND /> */}
                <NouvelleDemande />
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header ">
                      <h4
                        className="card-title"
                        onClick={() => showEditModalDirecteur()}
                      >
                        Liste des projets{" "}
                      </h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        {contenuTab || users.length !== 0 ? (
                          currentItems.map((dossier, index) => (
                            <>
                              <div className="col-md-3" key={index}>
                                <div
                                  
                                  style={{
                                    borderRadius: "7px",
                                    backgroundColor: dossier.Kolera
                                      ? "orange"
                                      : "green",
                                  }}
                                  className={
                                    dossier.p_numeroProcedure < 9
                                      ? "card card-stats card-warning"
                                      : "card card-stats card-success"
                                  }
                                >
                                  <Link to={`/viewDossier/11`}>
                                    <div className="card-body">
                                      <div className="row">
                                        <div
                                          className="col-8 text-end"
                                          style={{ width: "100%" }}
                                        >
                                          <p className="card-category">
                                            {dossier.CodeProjet}
                                          </p>
                                          <h1 className="card-title">
                                            {dossier.LibelleProjet}
                                          </h1>
                                        </div>
                                        <div
                                          className="col-4 text-start"
                                          style={{ width: "10%" }}
                                        >
                                          <p className="card-category">
                                            {dossier.MontantProjet} €
                                          </p>
                                        </div>
                                      </div>
                                      <div className="row mt-4">
                                        <div
                                          className="col-6 text-start"
                                          style={{ width: "50%" }}
                                        >
                                          <p className="card-category">
                                            {dossier.DateDebut}
                                          </p>
                                        </div>
                                        <div
                                          className="col-6 text-end"
                                          style={{ width: "50%" }}
                                        >
                                          <p className="card-category">
                                            {dossier.DateFin}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                  {/* met un BsPencil qui appel un */}
                                  <button
                                    type="button"
                                    className="btn btn-outline-primary btn-sm m-1 waves-effect text-primary bg-white"
                                    variant="default"
                                    name="numCompteEdit"
                                    onClick={() => showEditModal(dossier)}
                                  >
                                    <BsPencilSquare />
                                  </button>
                                </div>
                              </div>
                            </>
                          ))
                        ) : (
                          <>
                            <div className="col-md-4">
                              <div className="card card-stats card-danger">
                                <div className="card-body ">
                                  <div className="row">
                                    <div className="col-5">
                                      <div className="icon-big text-center">
                                        <i className="la la-times-circle-o text-danger"></i>
                                      </div>
                                    </div>
                                    <div className="col-7 d-flex align-items-center">
                                      <div className="numbers">
                                        <p className="card-category">Aucun</p>
                                        <h4 className="card-title">Projet</h4>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {nbrPage !== 1 && nbrPage !== 0 && users.length !== 0 ? (
                      <>
                        <ul className="pageNumbers">
                          <li>
                            <button
                              disabled={currentPage == pages[0] ? true : false}
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

          <FooterContext />
        </div>
      </div>
    </>
  );
}
