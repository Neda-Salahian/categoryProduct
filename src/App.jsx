
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//Import React
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//IMPORT COMPONENTS
import Product from '../src/Components/Product/Product'
import ProductCreate from './Components/Product/ProductCreate';
import NavBar from './Components/NavBar/NavBar';
import Category from './Components/Category/Category';
function App() {

  return (
    <>
    <NavBar />
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Product />}/>
            <Route path="/product-create" element={<ProductCreate />} />
            <Route path="/category-create" element={<Category />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
