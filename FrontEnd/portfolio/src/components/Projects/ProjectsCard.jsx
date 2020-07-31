import React, { Component } from "react";
import { connect } from "react-redux";
import Projects from "../Projects/Projects";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => dispatch(getProjects()),
});

const getProjects = () => {
  return async (dispatch, getState) => {
    // fetch
    const result = await fetch("http://localhost:3001/projects");
    const data = await result.json();
    dispatch({
      type: "SET_PROJECTS",
      payload: data,
    });
  };
};

class ProjectsCard extends Component {
  componentDidMount = () => {
    this.props.fetchProjects();
  };

  render() {
    return (
      <div>
        {this.props.projects.map((project) => (
          <Projects title={project.name} description={project.description} />
        ))}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsCard);
