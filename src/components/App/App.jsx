import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyle";

import Home from "../../pages/Home";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route>
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
