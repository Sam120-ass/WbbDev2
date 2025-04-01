import { useState } from 'react';

import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import Itempage from './pages/Itempage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div> 


      <BrowserRouter>

      
      <Routes>
        <Route path='/' element = {<Homepage/>}/>
        <Route path='/item/:id' element = {<Itempage/>}/>


      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
