import Carousell from './component/Carousell'
import './App.css';
import Search from './component/SearchComponent/Search'

function App() {
  return (
    <div className="App">
      <Search />
      <Carousell search={'Harry Potter'}/>
      <Carousell search={'The Lord of the Rings'}/>
      <Carousell search={'Mummy'}/>
    </div>
  );
}

export default App;
