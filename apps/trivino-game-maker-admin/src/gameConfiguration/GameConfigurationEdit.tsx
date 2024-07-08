import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { GameTitle } from "../game/GameTitle";

export const GameConfigurationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput source="game.id" reference="Game" label="Game">
          <SelectInput optionText={GameTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
