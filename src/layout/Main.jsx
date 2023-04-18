import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';

const Main = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col lg={3}>sm=true</Col>
                    <Col lg={6}>
                        This is main container
                    </Col>
                    <Col lg={3}>sm=true</Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Main;