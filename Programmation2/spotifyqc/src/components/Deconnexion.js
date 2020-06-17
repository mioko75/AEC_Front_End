import React from "react";
import Button from "react-bootstrap/Button";

export class Deconnexion extends React.Component {
  handleDeconnexion() {
    this.props.onClick(false);
  }
  render() {
    return (
      <Button className="p-2 my-5" variant="primary" size="sm" onClick={() => this.handleDeconnexion()}>
        Déconnexion
      </Button>
    );
  }
}

