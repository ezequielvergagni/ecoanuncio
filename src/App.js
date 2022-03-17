import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';

function App() {
  const tituloDeProducto = 'Bolsas de Friselina'
  return (
    <div className="App">
      
        <Navbar />
        <ItemListContainer greeting = 'Bienvenido a Ecoanuncio' tituloDeProducto= {tituloDeProducto} />

    </div>
  );
}

export default App;
