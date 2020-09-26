import React from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "semantic-ui-react";

const TableCategoryRegister = () => (
  <>
    <div className="Register">
      <h3 className="Register-title">Package</h3>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Benefit</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Silver Specialist</Table.Cell>
            <Table.Cell>Rp 300.000</Table.Cell>
            <Table.Cell>1 Workshop or Symposium</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Silver General Practitioner</Table.Cell>
            <Table.Cell>Rp 250.000</Table.Cell>
            <Table.Cell>1 Workshop or Symposium</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Silver Medical Student &amp; Nurse</Table.Cell>
            <Table.Cell>Rp 150.000</Table.Cell>
            <Table.Cell>1 Workshop or Symposium</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Gold Specialist</Table.Cell>
            <Table.Cell>Rp 450.000</Table.Cell>
            <Table.Cell>1 Workshop and Symposium</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Gold General Practitioner</Table.Cell>
            <Table.Cell>Rp 300.000</Table.Cell>
            <Table.Cell>1 Workshop and Symposium</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Gold Medical Student &amp; Nurse</Table.Cell>
            <Table.Cell>Rp 200.000</Table.Cell>
            <Table.Cell>1 Workshop and Symposium</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Platinum Specialist</Table.Cell>
            <Table.Cell>Rp 550.000</Table.Cell>
            <Table.Cell>2 Workshop and Symposium</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Platinum General Practitioner</Table.Cell>
            <Table.Cell>Rp 400.000</Table.Cell>
            <Table.Cell>2 Workshop and Symposium</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Platinum Medical Student &amp; Nurse</Table.Cell>
            <Table.Cell>Rp 250.000</Table.Cell>
            <Table.Cell>2 Workshop and Symposium</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
    <div>
      <h3>Registration</h3>
      <Link to="/registration">
        <Button className="Register-title">Register</Button>
      </Link>
    </div>
  </>
);
export default TableCategoryRegister;
