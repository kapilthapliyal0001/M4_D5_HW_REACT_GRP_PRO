import "./App.css";
// import BackOffice from "./component/BackOffice";
import Carousell from "./component/Carousell";
import "./App.css";
import Search from "./component/SearchComponent/Search";
<<<<<<< Updated upstream
import NavbarNetflix from "./component/Navbar/NavbarNetflix";
=======
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
<<<<<<< Updated upstream
      <NavbarNetflix />
=======
>>>>>>> Stashed changes
      {/* add the book id to this */}
      {/* <BackOffice id="1621579832" /> */}

      <Search />
      <Carousell search={"Harry Potter"} />
      <Carousell search={"The Lord of the Rings"} />
      <Carousell search={"Mummy"} />
    </div>
  );
}

export default App;
