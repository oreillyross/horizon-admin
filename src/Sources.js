import React from "react";
import { Table, Header, Checkbox } from "semantic-ui-react";

export default function Sources() {
  return (
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>
            Select
            <div>
              {" "}
              <Checkbox />{" "}
            </div>
          </Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Active Searches</Table.HeaderCell>
          <Table.HeaderCell>Referenced</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Header>
              <Checkbox />
            </Header>
          </Table.Cell>
          <Table.Cell singleLine>BBC News</Table.Cell>
          <Table.Cell>84</Table.Cell>
          <Table.Cell textAlign="right">14 times</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
