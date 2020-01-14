import React from "react";
import { Grid, Button, Divider } from "semantic-ui-react";
import {
  useTable,
  useGroupBy,
  useFilters,
  useSortBy,
  useExpanded,
  usePagination
} from "react-table";
import Sources from "./Sources";

export default () => (
  <div>
    <h4>Source Management</h4>
    <Grid columns={1} divided>
      <Grid.Row>
        <Grid.Column>
          Sources
          <Divider />
          <Sources />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);
