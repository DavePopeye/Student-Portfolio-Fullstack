import React from "react";
import { Card } from "react-bootstrap";

class StudentsCard extends React.Component {
  render() {
    console.log(this.props.students);
    return (
      <>
        {!this.props.isLoading &&
          this.props.errMess === undefined &&
          this.props.students.map((student) => {
            return (
              <Card style={{ width: "18rem" }}>
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
            );
          })}
      </>
    );
    console.log(this.props.isLoading);
    console.log(this.props.errMess);
  }
}

export default StudentsCard;
