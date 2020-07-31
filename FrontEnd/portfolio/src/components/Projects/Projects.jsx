import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";

export default class Projects extends Component {
  render() {
    return (
      <Col className="col-6 d-inline-flex my-2 justify-content-center">
        <Card className="cardStyle img-thumbnail shadow">
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              <p>{this.props.description}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
