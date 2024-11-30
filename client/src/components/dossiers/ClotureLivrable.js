import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ClotureLivrable({ showLivrableCloture, onHide }) {
  const colorStyle = {
    color: "#000",
  };

  return (
    <>
      <Modal
        size="md"
        show={showLivrableCloture}
        onHide={onHide}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title className="text-primary h6 md-6" closeButton>
            {/* Téléverser Document Technique */}
            Livrable et Cloturation de Phase
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput3"
                >
                  <Form.Label>Code: </Form.Label>
                  <Form.Control
                    type="text"
                    name="lieuNaiss"
                    placeholder="Lieu de naissance"
                    autoComplete="off"
                    value={"PH001"}
                    style={{
                      backgroundColor: "rgb(226, 226, 226)",
                    }}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput3"
                >
                  <Form.Label>Nom Organisme : </Form.Label>
                  <Form.Control
                    type="text"
                    name="profession"
                    placeholder="Profession"
                    autoComplete="off"
                    style={{
                      backgroundColor: "rgb(226, 226, 226)",
                    }}
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
                  <Form.Label>Nom Projet : </Form.Label>
                  <Form.Control
                    type="text"
                    name="profession"
                    placeholder="Profession"
                    autoComplete="off"
                    style={{
                      backgroundColor: "rgb(226, 226, 226)",
                    }}
                    value={"Développement d'un ERP"}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput3"
                >
                  <Form.Label>Phase: </Form.Label>
                  <Form.Control
                    type="text"
                    name="lieuNaiss"
                    placeholder="Lieu de naissance"
                    autoComplete="off"
                    value={"Analyse des besoins"}
                    style={{
                      backgroundColor: "rgb(226, 226, 226)",
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>Livrable: </Form.Label>
                  <br />
                  <Form.Control
                    type="file"
                    name="fileUpload"
                    accept=".pdf,.doc,.docx,.xlsx,.jpg,.png"
                  />
                </Form.Group>
              </Col>
              {/* <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>Etat de réalisation: </Form.Label>
                  <br />
                  <Form.Select name="role" value={"Terminée"}>
                    <option value="Directeur">- Terminée</option>
                    <option value="Chef de projet">- Non terminée</option>
                  </Form.Select>
                </Form.Group>
              </Col> */}
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
