import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './App.css';
import {Container, Row, Col} from "react-bootstrap";
import logo from '../img/spotify-icone-bleu.png';

export class Connexion extends React.Component {
  constructor(props) {  
    super(props);  
    this.handleConnexion = this.handleConnexion.bind(this);  
  } 
  handleConnexion(){
    let connecter = true;

    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    if (email.toLowerCase() === "mioko75@hotmail.com" && pass === "patate")
      connecter = true;
    this.props.onClick(connecter);  
  } 

  render() {
    return (
      <Container className="bgBlack">
          <Row className="text-center p-2">
            <Col className="bgBlack py-3">
              <img src={logo} alt="Spotify QC" width="200px" className="text-center"/>
              <h1 className="py-3">DE LA MUSIQUE POUR TOUS!</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email"/>
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password"/>
                </Form.Group>

                <Button className="p-2 mb-3" variant="light" size="lg" block onClick={this.handleConnexion}>
                  SE CONNECTER
                </Button>
              </Form>
            </Col>
          </Row>
      </Container> 
    );
  }
}
