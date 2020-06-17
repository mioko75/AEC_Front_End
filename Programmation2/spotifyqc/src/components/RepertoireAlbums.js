import React from "react";
import Col from "react-bootstrap/Col";

export class RepertoireAlbums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hovered: false};
  }
  render() {
    return (
      <Col xs="12" sm="6" md="4" lg="3">
        <img
          src={this.props.src}
          alt={this.props.alt}
          title={this.props.title}
          titre={this.props.titre}
          className="img-fluid py-2"
          onMouseOut={() => this.setState({hovered: false})}
          onMouseOver={() => this.setState({hovered: true})}
          style={{transform: `${this.state.hovered ? 'scale(1.2,1.2)' : 'scale(1,1)'}`}}
        />
      </Col>
    );
  }
}
