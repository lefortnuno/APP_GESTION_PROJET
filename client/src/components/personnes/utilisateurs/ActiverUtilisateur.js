import axios from "../../../api/axios";
import getDataUtilisateur from "../../../api/udata";
import { useState } from "react";
import { toast } from "react-toastify";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const URL_DE_BASE = `utilisateur/`;
let isValidate = false;
let i = 0;

export default function ModalActivation({ showActive, onHide }) { 
  const u_info = getDataUtilisateur();
  const [inputs, setInputs] = useState({
    identification: "",
    statu: "",
    unite: "",
  });
  const [erreurs, setErreurs] = useState([]);

  const rowStyle = { marginTop: "1rem" };

  return (
    <>
      <Modal
        size="md"
        show={showActive}
        onHide={onHide}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title className="text-primary h6 md-6">
            Modification de l'utilisateur
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
                  <Form.Label> Matricule: </Form.Label>
                  <Form.Control
                    type="text"
                    name="cin"
                    value={"UT001"}
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
                  <Form.Label>Nom : </Form.Label>
                  <Form.Control
                    type="text"
                    name="nom"
                    value={"El Idrissi"}
                    placeholder="Complement d'information"
                    autoComplete="off"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput3"
                >
                  <Form.Label>Prénom : </Form.Label>
                  <Form.Control
                    type="text"
                    name="domicile"
                    value={"Ahmed"}
                    placeholder="dresse de domicile ...."
                    autoComplete="off"
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
                  <Form.Label>Téléphone: </Form.Label>
                  <Form.Control
                    type="text"
                    name="lieuLivrance"
                    value={"0612345678"}
                    placeholder="Lieu de délivrance du CIN "
                    autoComplete="off"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput3"
                >
                  <Form.Label>Email : </Form.Label>
                  <Form.Control
                    type="text"
                    name="prenom"
                    value={"ahmed.elidrissi@example.com"}
                    placeholder="Complement d'information"
                    autoComplete="off"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlSelect3"
                >
                  <Form.Label>Rôle : </Form.Label> <br />
                  <Form.Select name="role" value={"Chef de projet"}>
                    <option value="Directeur">- Directeur</option>
                    <option value="Chef de projet">- Chef de projet</option>
                    <option value="Secrétaire">- Secrétaire</option>
                    <option value="Développeur">- Développeur</option>
                    <option value="Ingénieur">- Ingénieur</option>
                    <option value="Comptable">- Comptable</option>
                    <option value="Administrateur">- Administrateur</option>
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
          <Button variant="primary">Enregistrer</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
