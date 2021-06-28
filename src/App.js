import "./assets/css/output.css";
import { Router } from "@reach/router";

import Main from "./views/Main";
import AddCollection from "./views/AddColection";
import CollectionDetail from "./views/CollectionDetail";
import AddSkin from "./views/AddSkin";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <AddCollection path="/collections/add" />
        <CollectionDetail path="/collections/:id" />
        <AddSkin path="/collections/:id/add" />
      </Router>
    </div>
  );
}

export default App;
