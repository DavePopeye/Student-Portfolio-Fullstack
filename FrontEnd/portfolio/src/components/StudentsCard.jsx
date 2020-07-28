import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "../style/StudentsCard.css";

class StudentsCard extends React.Component {
  render() {
    console.log(this.props.students);
    return (
      <>
        {!this.props.isLoading &&
          this.props.errMess === undefined &&
          this.props.students.map((student) => {
            return (
              <Col className="col-6 d-inline-flex my-2 justify-content-center">
                <Card className="cardStyle img-thumbnail shadow">
                  <Card.Body>
                    <Card.Title>
                      {student.name} {student.surname}
                    </Card.Title>
                    <Card.Text>
                      <p>{student.email}</p>
                      <p>{student.country}</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </>
    );
  }
}

export default StudentsCard;
