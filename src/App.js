import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Users from "./pages/Users";
import Products from "./pages/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Earnings from "./pages/Earnings";
import EditProduct from "./components/ProductComponents/EditProduct";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/earning' element={<Earnings/>}/>
          <Route path='/edit-product' element={<EditProduct/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
