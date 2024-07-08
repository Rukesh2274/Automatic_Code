import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const AdsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="platform"
          label="platform"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="adId" source="adId" />
        <NumberInput step={1} label="clicks" source="clicks" />
        <NumberInput step={1} label="impressions" source="impressions" />
        <NumberInput label="revenue" source="revenue" />
      </SimpleForm>
    </Edit>
  );
};
