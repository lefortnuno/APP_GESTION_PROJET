import axios from "../../../api/axios";
import getDataUtilisateur from "../../../api/udata";
import { useState } from "react";
import { toast } from "react-toastify";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const URL_DE_BASE = `individu/`;
let isValidate = false;
let i = 0;

export default function ModalEdition(props) {
  //#region // MES VARIABLES
  const identifiant = props.children;
  const u_info = getDataUtilisateur();
  const [inputs, setInputs] = useState({
    etatMorale: "",
    numeroTelephone: "",
    complementInformation: "",
  });
  const [erreurs, setErreurs] = useState([]);
  const [messages, setMessages] = useState({
    numeroTelephone: " obligatoire",
    complementInformation: " obligatoire",
  });
  //#endregion

  //#region // QUAND JE FERMER MON MODAL, CETTE FONCTIO EST APPELLER
  function onClose() {
    props.onHide();
    i = 0;

    const inputsArray = [
      "cin",
      "nom",
      "prenom",
      "lieuNaiss",
      "domicile",
      "profession",
      "lieuLivrance",
      "cinConjoint",
      "nomConjoint",
      "prenomConjoint",
      "lieuEtatCivil",
      "etatCivil",
    ];

    inputsArray.forEach((element) => {
      inputs[element] = "";
      isValidate = false;
      setErreurs((values) => ({ ...values, [element]: false }));
    });
  }
  //#endregion

  const colorStyle = {
    color: "#000",
  };

  return (
    <>
      <Modal
        size="md"
        show={props.showEdit}
        onHide={props.closeEditModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title className="text-primary h6 md-6">
            Modification de l'Organisme
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>Code </Form.Label>
                  <Form.Control
                    type="text"
                    name="cin"
                    value={"ORG001"}
                    placeholder="Numéro de Téléphone "
                    autoComplete="off"
                  />
                  <small className="text-danger d-block">
                    {erreurs.cin ? messages.cin : null}
                  </small>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput3"
                >
                  <Form.Label>Nom : </Form.Label>
                  <Form.Control
                    type="text"
                    name="nom"
                    value={"Agence Urbaine de Casablanca"}
                    placeholder="Complement d'information"
                    autoComplete="off"
                  />
                  <small className="text-danger d-block">
                    {erreurs.nom ? messages.nom : null}
                  </small>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput3"
                >
                  <Form.Label>Adresse : </Form.Label>
                  <Form.Control
                    type="text"
                    name="domicile"
                    value={"Rue Allal El Fassi, Casablanca"}
                    placeholder="dresse de domicile ...."
                    autoComplete="off"
                  />
                  <small className="text-danger d-block">
                    {erreurs.domicile ? messages.domicile : null}
                  </small>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput3"
                >
                  <Form.Label>Téléphone: </Form.Label>
                  <Form.Control
                    type="text"
                    name="lieuLivrance"
                    value={"0522-345678"}
                    placeholder="Lieu de délivrance du CIN "
                    autoComplete="off"
                  />
                  <small className="text-danger d-block">
                    {erreurs.lieuLivrance ? messages.lieuLivrance : null}
                  </small>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput3"
                >
                  <Form.Label>Nom contact : </Form.Label>
                  <Form.Control
                    type="text"
                    name="prenom"
                    value={"Ahmed Ben Ali"}
                    placeholder="Complement d'information"
                    autoComplete="off"
                  />
                  <small className="text-danger d-block">
                    {erreurs.prenom ? messages.prenom : null}
                  </small>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput3"
                >
                  <Form.Label>Email contact : </Form.Label>
                  <Form.Control
                    type="text"
                    name="profession"
                    value={"contact@aucasablanca.ma"}
                    placeholder="Profession"
                    autoComplete="off"
                  />
                  <small className="text-danger d-block">
                    {erreurs.profession ? messages.profession : null}
                  </small>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput3"
                >
                  <Form.Label>Adresse web : </Form.Label>
                  <Form.Control
                    type="text"
                    name="lieuNaiss"
                    value={"https://aucasablanca.ma"}
                    placeholder="Lieu de naissance"
                    autoComplete="off"
                  />
                  <small className="text-danger d-block">
                    {erreurs.lieuNaiss ? messages.lieuNaiss : null}
                  </small>
                </Form.Group>
              </Col>
            </Row>

            <small className="text-danger d-block">
              {erreurs.messageErreur ? messages.messageErreur : null}
            </small>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={onClose}>
            Annuler
          </Button>

          <Button variant="success">Enregistrer</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
