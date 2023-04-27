
import './App.css';
import CreateComponent from './CreateComponent';
import Read from './Read';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Update from './Update';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<CreateComponent/>} />
      <Route path='/read' element={<Read/>} />
      <Route path='/update' element={<Update/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
