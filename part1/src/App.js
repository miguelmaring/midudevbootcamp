import './App.css';
import Mensaje from './Mensaje.js'

const Description = () =>{
  return <p>Esta es la app del curso</p>
}

const App = () => {
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color='yellow' message='En un curso' />
      <Mensaje color='green' message='De React' />
      <Description />
    </div>
  );
}

export default App;
