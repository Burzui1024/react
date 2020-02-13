import React from "react";
import {Button, Form, Navbar} from "bootstrap-4-react";

const TopNavigation = () => {
    return (
        <Navbar light bg="light">
            <Navbar.Brand href="#">Магазин книг</Navbar.Brand>
            <Form inline my="2 lg-0">
                <div className="col-xl-1">
fsdfsd
                </div>
                <Form.Input type="search" placeholder="Search" mr="sm-2" icons="search"/>
                <Button outline success my="2 sm-0">Search</Button>
            </Form>
        </Navbar>
    )
}

export default TopNavigation