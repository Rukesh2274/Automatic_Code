import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  PasswordInput,
  SelectArrayInput,
  ReferenceArrayInput,
} from "react-admin";

import { GameTitle } from "../game/GameTitle";
import { CoinsTitle } from "../coins/CoinsTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Username" source="username" />
        <TextInput label="Email" source="email" type="email" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="games"
          reference="Game"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GameTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="coinsItems"
          reference="Coins"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CoinsTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
