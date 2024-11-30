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
export default function ModalEditionDirecteur({
  props,
  showEditDirecteur,
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
        show={showEditDirecteur}
        onHide={onHide}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title className="text-primary h6 md-6" closeButton>
            Modification de Projet
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
                  <Form.Label>Nom: </Form.Label>
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
                  <Form.Label>Organisme Client : </Form.Label>
                  <Form.Control
                    type="text"
                    name="nom"
                    placeholder="Complement d'information"
                    autoComplete="off"
                    value={"Agence Urbaine de Casablanca"}
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
                    name="domicile"
                    placeholder="dresse de domicile ...."
                    autoComplete="off"
                    value={
                      "Concevoir et à implémenter un logiciel intégré permettant de centraliser et de gérer les processus opérationnels d'une entreprise, tels que la gestion des ressources humaines, la finance, les stocks et la production."
                    }
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
                  <Form.Label>Date de Début: </Form.Label>
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
                  <Form.Label>Date de Fin: </Form.Label>
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
                  <Form.Label>Chef de projet : </Form.Label>
                  <Form.Select name="role" value={"El Idrissi Ahmed"}>
                    <option value="Directeur">- El Idrissi Ahmed</option>
                    <option value="Chef de projet">- Mounir Ben </option>
                    <option value="Chef de projet">- Khazid Lolo </option>
                    <option value="Chef de projet">- Jhon Lee </option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput3"
                >
                  <Form.Label>Montant: </Form.Label>
                  <Form.Control
                    type="text"
                    name="lieuNaiss"
                    placeholder="Lieu de naissance"
                    autoComplete="off"
                    value={"120.000 €"}
                  />
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