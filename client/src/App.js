import { BrowserRouter, Route } from "react-router-dom";
import CountryDetail from "./components/CountryDetail/CountryDetail";
import CreateActivity from "./components/CreateActivity/CreateActivity";
import EditActivity from "./components/EditActivity/EditActivity";
import Home from "./components/Home/Home";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/country/:id" component={CountryDetail} />
      <Route
        exact
        path="/activity/create-activity"
        component={CreateActivity}
      />
      <Route
        exact
        path="/activity/edit-activity/:id"
        component={EditActivity}
      />
    </BrowserRouter>
  );
}

export default App;
