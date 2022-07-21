import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home'



function App() {
  return (
    <div className="App container vh-100">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
