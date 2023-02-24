import './App.css';
import IndexPage from './components/indexPage/IndexPage';
import Proyectos from './components/proyectos/Proyectos';

//Router
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<IndexPage />}/>
          <Route path='/proyectos' element={<Proyectos />}/>
        </Routes>
      </Router>

        
    </div>
  );
}

export default App;
