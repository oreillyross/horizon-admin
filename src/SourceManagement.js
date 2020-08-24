import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import styled from "styled-components";

const StyledDiv = styled.div`
  tr  {
    border: 1px solid white;
  }
`;

const products = [
  { id: 1, name: "Item 1", price: 100 },
  { id: 2, name: "Item 2", price: 102 }
];
const columns = [
  {
    dataField: "id",
    text: "Product ID"
  },
  {
    dataField: "name",
    text: "Product Name"
  },
  {
    dataField: "price",
    text: "Product Price"
  }
];

export default () => (
  <StyledDiv>
    <BootstrapTable keyField="id" data={products} columns={columns} />{" "}
  </StyledDiv>
);
