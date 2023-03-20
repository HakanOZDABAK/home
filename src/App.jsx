
import { Container } from 'react-bootstrap';
import './App.css';
import Dashboard from './layouts/Dashboard';
import Navi from './layouts/Navi.jsx';


function App() {
  return (
    <div className="App">
      <Navi />
      <Container>
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
