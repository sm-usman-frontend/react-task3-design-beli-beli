import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import ProductDetailsPage from './components/ProductDetailsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:productId" element={<ProductDetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
