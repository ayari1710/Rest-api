import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Add from "./Pages/Add";
import Error from "./Pages/Error";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contactlist from "./components/Contactlist"
import { useState } from "react";

function App() {
  const [inputsearch, setinputsearch] = useState("")
  
  return (
    <div  className="app">
      <Navbar setinputsearch={setinputsearch}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={["/add","/edit"]} component={Add} />
        <Route path="/contacts"  render={(props)=><Contactlist inputsearch={inputsearch} {...props}/>} />
        <Route path="/*" component={Error} />
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
