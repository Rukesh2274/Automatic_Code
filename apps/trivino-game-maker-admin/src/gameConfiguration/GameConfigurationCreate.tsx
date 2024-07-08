import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { GameTitle } from "../game/GameTitle";

export const GameConfigurationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput source="game.id" reference="Game" label="Game">
          <SelectInput optionText={GameTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
