
import './App.scss';
import Home from './pages/Home';
import Footer from './components/Footer';
import Product from './components/Product';
import Service from './components/Service';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div>
            <Home></Home>
            <Product></Product>
            <Service></Service>
            <Footer></Footer>
          </div>
      </header>
    </div>
  );
}

export default App;
