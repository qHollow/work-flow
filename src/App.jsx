import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./globalStyle";

import Header from "./components/Header";
import Aside from "./components/Aside";

import Dashboard from "./pages/Dashboard";

const Wrapper = styled.div`
  display: flex;
  background-color: #FAFAFA;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Wrapper>
          <Header />
          <Aside />
          <Switch>
            <Route path="/" exact>
              <Dashboard />
            </Route>
            <Route>
              <Dashboard />
            </Route>
          </Switch>
        </Wrapper>
      </Router>
    </>
  );
};

export default App;
