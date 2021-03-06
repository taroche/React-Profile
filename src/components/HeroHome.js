import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function HeroHome(props) {
    return(
        <Jumbotron className="jumbotron-fluid p-0"> 
            <Container className="homeHeader" fluid={true}>
                <Row className="heroRow d-flex align-items-center flex-column">

                    <Col xs={12} sm={12} lg={12} xl={12}>
                       {props.title && <h2 className="heroTitle display-3">{props.title}</h2> }
                       {props.subTitle && <p className=" heroSubtitle">{props.subTitle}</p>}
                       {props.text && <p className="arrowText font-weight-bold">{props.text}</p>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default HeroHome;