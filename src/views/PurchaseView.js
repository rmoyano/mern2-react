import React from "react";
import { CartDetail } from "../components/Shopping/CartDetail";
import { Row, Col, Button } from "react-bootstrap";
//import Button from "@restart/ui/esm/Button";

export const PurchaseView = ({history}) => {
    const handleCancel = () => {
        history.push("/")
    }

    return(
        <div>
            <h1>Shopping Cart. </h1> 
            < CartDetail />
            <Row>
                <Col xs={10} >
                    <Button variant='danger' onClick={handleCancel}>Cancel</Button>

                </Col>
                <Col xs={2}>
                    <Button variant='success'>Check out</Button>
                </Col>


            </Row>

        </div>

    );
};