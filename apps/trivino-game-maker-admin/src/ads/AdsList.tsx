import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AdsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AdsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="platform" source="platform" />
        <TextField label="adId" source="adId" />
        <TextField label="clicks" source="clicks" />
        <TextField label="impressions" source="impressions" />
        <TextField label="revenue" source="revenue" />
      </Datagrid>
    </List>
  );
};
