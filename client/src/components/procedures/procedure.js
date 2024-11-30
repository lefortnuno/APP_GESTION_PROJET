import axios from "../../api/axios";
import getDataUtilisateur from "../../api/udata";
import { libraryList, AjoutLibrary } from "../../api/file.js";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";

import Context from "../../contexts/Context";
import { NouveauPhase } from "../personnes/perso.js";
import {phasesData} from "../../api/data_array.js";
import ModalEditChefProjet from "./ModalEditChefProjet.js"

const base = `procedure`;
const URL_DE_BASE = base + `/`;

export default function Procedure() {
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
        setUsers(response.data);
        console.log("pozin'data ? ", response.data);
      } else {
        toast.warning("Vous n'êtes pas autorisé à accéder à cette page!");
      }
    });
  }
  //#endregion

  //#region   //----- MA RECHERCHE -----
  const [contenuTab, setContenuTab] = useState(false);
  function rechercheUtilisateur(event) {
    const valeur = event.target.value;
    if (!valeur) {
      getUsers();
      setContenuTab(true);
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
  const currentItems = phasesData.slice(indexOfFirstItem, indexOfLastItem);

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

  const [showEquipeProjetChef, setShowEquipeProjetChef] = useState(false);
  const handleCloseModalEquipe = () => setShowEquipeProjetChef(false);

  return (
    <>
      <Context>
        <NouveauPhase />

        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header ">
                <h4 className="card-title">Liste des phases</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive text-nowrap">
                  <table className="table table-striped w-auto">
                    <thead>
                      <tr>
                        <th scope="col">Code</th>
                        <th scope="col">Libellé</th>
                        <th scope="col">Description</th>
                        <th scope="col">Livrable (Code)</th>
                        <th scope="col">Dossier du livrable</th>
                        <th scope="col">Description du livrable</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contenuTab || users.length !== 0 ? (
                        currentItems.map((user, key) => (
                          <tr key={key}>
                            <th scope="row"
                                      style={{ cursor: "pointer" }}
                                      onClick={() => setShowEquipeProjetChef(true)}>{user.codePhase} </th>
                            <td>{user.libellePhase}</td>
                            <td>{user.descriptionPhase}</td>
                            <td>
                              {user.libelleLivrable} (
                              <span style={{ fontWeight: "bold" }}>
                                {user.codeLivrable}
                              </span>
                              )
                            </td>
                            <td>{user.cheminDossier}</td>
                            <td>{user.descriptionLivrable}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={7} className="text-danger text-center">
                            La liste est vide ....
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
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
                          currentPage == pages[pages.length - 1] ? true : false
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
          <ModalEditChefProjet
            showEquipeProjetChef={showEquipeProjetChef}
            onHide={handleCloseModalEquipe}
          />
      </Context>
    </>
  );
}
