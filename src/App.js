import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./componentes/header";
import MiApi from './componentes/MiApi';
import Footer from "./componentes/Footer"

function App() {
  return (
    <div className="App container">
      <Header/>
      <MiApi/>
      <Footer/>
    </div>
  );
}

export default App;
