import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const nome = "Maria"

  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome="Marco" />
      <SayMyName nome="Ana" />
      <SayMyName nome= {nome} />
      <Pessoa 
      nome="Marco"
      idade="21"
      profissão="Programador"
      foto="https://via.placeholder.com/150" 
      />
    </div>
  );
}

export default App;
