import { useState } from 'react';
import Header from './components/Header.jsx';
import './App.css'
import ItemContainer from './components/ItemContainer.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div> 
      <Header/>
      <ItemContainer className = "ItemContainerHP"/>
    </div>
  )
}

export default App
