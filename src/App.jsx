
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from '../src/pages/HomePage'
import InventoryPage from '../src/pages/InventoryPage'
import OrderPage from '../src/pages/InventoryPage'


function App() {
  

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/inventory" element={<InventoryPage/>} />
        <Route path="/orders" element={<OrderPage />} />
      </Routes>
      
    </Router>
    </>
  )
}

export default App
