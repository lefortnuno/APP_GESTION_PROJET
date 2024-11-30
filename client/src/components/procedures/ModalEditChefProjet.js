import axios from "../../api/axios";
import getDataUtilisateur from "../../api/udata";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const URL_DE_BASE = `individu/`;
let isValidate = false;
let i = 0;
export default function ModalEditChefProjet({
  props,
  showEquipeProjetChef,
  onHide,
  onClose,
  userData,
}) {
  //#region // QUAND JE FERMER MON MODAL, CETTE FONCTIO EST APPELLER
  function onClose() {
    props.onHide();
    i = 0;
  }
  //#endregion

  const colorStyle = {
    color: "#000",
  };

  return (
    <>
      <Modal
        size="md"
        show={showEquipeProjetChef}
        onHide={onHide}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title className="text-primary h6 md-6" closeButton>
            Modifier Information des Phases
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
                  <Form.Label>Libellé: </Form.Label>
                  <Form.Control
                    type="text"
                    name="cin"
                    value={"Développement d'un ERP"}
                    placeholder="Numéro de Téléphone "
                    autoComplete="off"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput3"
                >
                  <Form.Label>Description : </Form.Label>
                  <Form.Control
                    type="text"
                    name="nom"
                    placeholder="Complement d'information"
                    autoComplete="off"
                    value={"Agence Urbaine de Casablanca"}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput3"
                >
                  <Form.Label>Dossier du livrable: </Form.Label>
                  <Form.Control
                    type="text"
                    name="lieuLivrance"
                    placeholder="Lieu de délivrance du CIN "
                    autoComplete="off"
                    value={"10-01-2024"}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput3"
                >
                  <Form.Label>Description du livrable: </Form.Label>
                  <Form.Control
                    type="text"
                    name="lieuLivrance"
                    placeholder="Lieu de délivrance du CIN "
                    autoComplete="off"
                    value={"30-06-2024"}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput3"
                >
                  <Form.Label>Livrable : </Form.Label>
                  <Form.Select name="role" value={"El Idrissi Ahmed"}>
                    <option value="Directeur">
                      - LIV101, Cahier des charges
                    </option>
                    <option value="Chef de projet">
                      -LIV102, Spécifications techniques{" "}
                    </option>
                    <option value="Chef de projet">
                      - LIV103, Plan de projet
                    </option>
                    <option value="Chef de projet">
                      - LIV104, Maquettes UI{" "}
                    </option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={onHide}>
            Annuler
          </Button>

          <Button variant="success">Enregistrer</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
