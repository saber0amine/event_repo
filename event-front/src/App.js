import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import EventList from "./pages/EventList";
import CreateEvent from "./pages/CreateEvent";
import Header from "./components/Header";

function App() {
  return (
      <Router>
        <Header />
        <Switch >
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/events" component={EventList} />
          <Route path="/create-event" component={CreateEvent} />
        </Switch>
      </Router>
  );
}

export default App;
