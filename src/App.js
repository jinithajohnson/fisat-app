import logo from './logo.svg';
import './App.css';
import AddStudent from './component/AddStudent';
import SearchStudent from './component/SearchStudent';
import Viewtud from './component/Viewtud';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<AddStudent/>} />
    <Route path='/search' element={<SearchStudent/>} />
    <Route path='/view' element={<Viewtud/>} />


    </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;
