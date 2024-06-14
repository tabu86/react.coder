
import { Navbar } from "./Navbar";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";



function App() {
  
let curso = 23456
let nombre = 'cristian'
  return (
    <div>
    <ItemListContainer  greeting={ "hola como estas?"} />
<Navbar/>
    <h1>hola mundo</h1>
    <h2>Curso : {curso}</h2>
    <p>hola, soy : {nombre}</p>
    </div> 
    

  ); 
}

export default App;
