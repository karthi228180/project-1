import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Part1 from './pages/Part1'
import Part2 from './pages/Part2';
import Part3 from './pages/Part3';
import Part4 from './pages/part4';

function App() {
  return (
    <>
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/part1' element={<Part1/>}/>
          <Route exact path='/part2' element={<Part2/>}/>
          <Route exact path='/part3' element={<Part3/>}/>
          <Route exact path='/part4' element={<Part4/>}/>
        </Routes>
      </BrowserRouter>
    </div>

    </>
  );
}

export default App;
