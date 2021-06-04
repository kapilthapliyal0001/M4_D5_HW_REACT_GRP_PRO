<<<<<<< HEAD

import "./App.css";
import BackOffice from "./component/BackOffice";
import Carousell from "./component/Carousell";
import "./App.css";
import Search from "./component/SearchComponent/Search";


function App() {
  return (
    <div className="App">

      {/* add the book id to this */}
      <BackOffice id="1621579832" />

      <Search />
      <Carousell search={"Harry Potter"} />
      <Carousell search={"The Lord of the Rings"} />
      <Carousell search={"Mummy"} />
    </div>
  );
=======
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import NavbarNetflix from "./component/Navbar/NavbarNetflix"

function App() {
  return (
    <>
      <NavbarNetflix />
    </>
  )
>>>>>>> origin/feature_ingrid
}

export default App
