import React from "react";
import {Container, Row, Col} from "bootstrap-4-react/lib/components/layout";

const Wraper = (props) => {
    return (
        <Container>
            <Row>
                <Col col="sm">One of three columns</Col>
                <Col col="sm">One of three columns</Col>
                <Col col="sm">One of three columns</Col>
            </Row>
        </Container>
    )
}

export default Wraper