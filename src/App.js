import "./App.css";
import "./i18n";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import List from "./pages/master-data-management/fee-type/List";
import Form from "./pages/master-data-management/fee-type/Form";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/Dashboard" exact component={Dashboard} />
        <Route path="/master-data-management/fee-type" exact component={List} />
        <Route
          path="/master-data-management/fee-type/form"
          exact
          component={Form}
        />
      </Switch>
    </Router>
  );
}

export default App;
