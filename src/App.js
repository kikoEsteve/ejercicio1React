import './App.css';

const Person = props => {
  console.log(props)
  return (<div>
    <ul>
      <li>Nombre: {props.name}, </li>
      <li>Apellido: {props.surname}, </li>
      <li>Edad: {props.age}.</li>
    </ul>
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
