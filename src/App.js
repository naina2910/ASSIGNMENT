import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home"
import Series from "./components/Series"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./css/app.css"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/series" exact component={()=><Series cardname="Series"/>}/>
          <Route path="/movies" exact component={()=><Series cardname="Movie"/>}/>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
