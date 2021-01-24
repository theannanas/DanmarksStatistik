import React from 'react';
import logo from '../images/android-chrome-192x192.png';
import {Col, Row} from "react-bootstrap"; // Tell webpack this JS file uses this image

function Header() {
    return (
        <Row>
            <Col sm={3}>
                <img src={logo} alt="Logo" width={50} />
            </Col>
            <Col sm={9}>
                <h1>LoveCounter</h1>
            </Col>
        </Row>
    );
}

export default Header;