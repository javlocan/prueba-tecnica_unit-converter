import { useState } from "react";

import "./App.scss";
import { FavList, Panel } from "./components";

function App() {
  const [newFav, setNewFav] = useState();

  return (
    <>
      <header>
        <nav className="container">
          <h1>unit converter</h1>
        </nav>
      </header>
      <section>
        <div className="container">
          <Panel setNewFav={setNewFav} />
          <FavList newFav={newFav} />
        </div>
      </section>
      <footer>
        <span>Terms of service</span>
        <span>Privacy policy</span>
      </footer>
    </>
  );
}

export default App;
