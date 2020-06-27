/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/faces/face-3.jpg";

class AccountManagement extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Profile New Account"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-5", "col-md-3", "col-md-4"]}
                      properties={[
                        {
                          label: "Select Bank",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Select The Bank",
                          //defaultValue: "Creative Code Inc.",
                          //disabled: true
                        },
                        {
                          label: "Account Number",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Input Account Number",
                          //defaultValue: "michael23"
                        },
                        {
                          label: "Account Name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Input Account Name",
                          //defaultValue: "michael23"
                        }
                      ]}
                    />
                    <Button bsStyle="info" pullRight fill type="submit">
                      Profile New Account
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={4}>
              <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                //avatar={avatar}
                //name="Mike Andrew"
                //userName="michael24"
                description={
                  <span>
                    "Bank Address:
                    <br />
                    Contact Number:"
                  </span>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default AccountManagement;
