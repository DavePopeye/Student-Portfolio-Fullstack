import React from "react";
import { Carousel, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import teamWork from "../images/teamWork.jpg";
import carousel from "../style/carousel.css";

class CarouselC extends React.Component {
  render() {
    return (
      <Container className="carouselStyle">
        <Carousel>
          <Carousel.Item>
            <Link to="/students" replace>
              <Image src={teamWork} className="imageStyle"></Image>
            </Link>
            <Row>
              <Carousel.Caption className="fontStyle">
                <h3>Meet The Students!</h3>
                <p>Look at the new web developer of the future</p>
              </Carousel.Caption>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={teamWork} className="imageStyle"></Image>

            <Carousel.Caption className="fontStyle">
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={teamWork} className="imageStyle"></Image>

            <Carousel.Caption className="fontStyle">
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}

export default CarouselC;
