import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AnswerList } from "./answer/AnswerList";
import { AnswerCreate } from "./answer/AnswerCreate";
import { AnswerEdit } from "./answer/AnswerEdit";
import { AnswerShow } from "./answer/AnswerShow";
import { GameList } from "./game/GameList";
import { GameCreate } from "./game/GameCreate";
import { GameEdit } from "./game/GameEdit";
import { GameShow } from "./game/GameShow";
import { QuestionList } from "./question/QuestionList";
import { QuestionCreate } from "./question/QuestionCreate";
import { QuestionEdit } from "./question/QuestionEdit";
import { QuestionShow } from "./question/QuestionShow";
import { GameConfigurationList } from "./gameConfiguration/GameConfigurationList";
import { GameConfigurationCreate } from "./gameConfiguration/GameConfigurationCreate";
import { GameConfigurationEdit } from "./gameConfiguration/GameConfigurationEdit";
import { GameConfigurationShow } from "./gameConfiguration/GameConfigurationShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { AdsList } from "./ads/AdsList";
import { AdsCreate } from "./ads/AdsCreate";
import { AdsEdit } from "./ads/AdsEdit";
import { AdsShow } from "./ads/AdsShow";
import { CoinsList } from "./coins/CoinsList";
import { CoinsCreate } from "./coins/CoinsCreate";
import { CoinsEdit } from "./coins/CoinsEdit";
import { CoinsShow } from "./coins/CoinsShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Trivino Game Maker"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Answer"
          list={AnswerList}
          edit={AnswerEdit}
          create={AnswerCreate}
          show={AnswerShow}
        />
        <Resource
          name="Game"
          list={GameList}
          edit={GameEdit}
          create={GameCreate}
          show={GameShow}
        />
        <Resource
          name="Question"
          list={QuestionList}
          edit={QuestionEdit}
          create={QuestionCreate}
          show={QuestionShow}
        />
        <Resource
          name="GameConfiguration"
          list={GameConfigurationList}
          edit={GameConfigurationEdit}
          create={GameConfigurationCreate}
          show={GameConfigurationShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Ads"
          list={AdsList}
          edit={AdsEdit}
          create={AdsCreate}
          show={AdsShow}
        />
        <Resource
          name="Coins"
          list={CoinsList}
          edit={CoinsEdit}
          create={CoinsCreate}
          show={CoinsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
