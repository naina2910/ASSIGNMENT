import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home"
import Series from "./components/Series"
import Movies from "./components/Movies"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./css/app.css"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/series" exact component={Series}/>
          <Route path="/Movies" exact component={Movies}/>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
