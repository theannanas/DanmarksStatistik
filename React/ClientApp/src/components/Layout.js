import React from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import Header from "./Header";

export default props => (
    <Grid fluid>
        <Header/>
        <Row>
            <Col sm={12}>
                {props.children}
            </Col>
        </Row>
    </Grid>
);
