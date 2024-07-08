import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AdsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="platform" source="platform" />
        <TextField label="adId" source="adId" />
        <TextField label="clicks" source="clicks" />
        <TextField label="impressions" source="impressions" />
        <TextField label="revenue" source="revenue" />
      </SimpleShowLayout>
    </Show>
  );
};
