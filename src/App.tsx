import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Notfound from "./Pages/Notfound";
import Catergory from "./Pages/Catergory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";


function App() {

  return (
    <Router>
      <Layout>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='*' element={<Notfound/>}/>
      <Route path='/category/:name' element={<Catergory/>}/>
      <Route path='/product/:name' element={<Product/>}/>
        </Routes>
        </Layout>
        </Router>
  );
}

export default App;
