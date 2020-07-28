import React from "react";
import NavBar from "./components/NavBar";
import StudentsCard from "./components/StudentsCard";
import Carousel from "./components/Carousel";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Container } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      isLoading: true,
      errMess: undefined,
    };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:3001/students");
    const json = await response.json();
    this.setState({ students: json.students, isLoading: false });
  }

  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Route path="/" exact component={() => <Carousel />} />
          <Container className="cardsContainer">
            <Route
              path="/students"
              exact
              component={() => (
                <StudentsCard
                  students={this.state.students}
                  isLoading={this.state.isLoading}
                  errMess={this.state.errMess}
                />
              )}
            />
          </Container>
        </Router>
      </>
    );
  }
}

export default App;
