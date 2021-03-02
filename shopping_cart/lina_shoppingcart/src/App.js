import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './Data';

function App() {
  const {products} = data;
  //console.log("Inside APP>JS",JSON.stringify(data));
  return (
    <div className="App">
      <Header />
      <div className="row">
      <Main products = {products} />
      <Basket />
      </div>
    </div>
  );
}

export default App;
