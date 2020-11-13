import './App.css';

const Person = props => {
  console.log(props)
  return (<div>
    <span>Nombre: {props.name}, </span>
    <span>Apellido: {props.surname}, </span>
    <span>Edad: {props.age}.</span>
  </div>)
}

function App() {
  const hello = <h2>Hello World</h2>;
  return (
    <div className="App">
      <header className="App-header">
        <Person name="Kiko" surname="Esteve" age={39} />
        <Person name="Antonio" surname="Nose" age={35} />
        <Person name="Pedro" surname="Picapiedra" age={20000} />
      </header>
    </div>
  );
}

export default App;
