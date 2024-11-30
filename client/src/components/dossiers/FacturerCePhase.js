import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function FacturerCEPhase({ showFacturation, onHide }) {
  const colorStyle = {
    color: "#000",
  };

  return (
    <>
      <Modal
        size="md"
        show={showFacturation}
        onHide={onHide}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title className="text-primary h6 md-6" closeButton>
            Facturation de Phase
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
                    value={"PR002"}
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
                  <Form.Label>Nom Projet : </Form.Label>
                  <Form.Control
                    type="text"
                    name="profession"
                    placeholder="Profession"
                    autoComplete="off"
                    style={{
                      backgroundColor: "rgb(226, 226, 226)",
                    }}
                    value={"Mise en place d'un CRM"}
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
                  <Form.Label>Nom Organisme : </Form.Label>
                  <Form.Control
                    type="text"
                    name="profession"
                    placeholder="Profession"
                    autoComplete="off"
                    style={{
                      backgroundColor: "rgb(226, 226, 226)",
                    }}
                    value={"Ministère de l'Économie"}
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
                    value={"Développement Backend"}
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
                  <Form.Label>Etat de facturation: </Form.Label>
                  <br />
                  <Form.Select name="role" value={"Non facturée"}>
                    <option value="Chef de projet">- Non facturée</option>
                    <option value="Directeur">- Facturée</option>
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
