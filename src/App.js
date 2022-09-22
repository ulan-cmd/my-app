import React from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/about/About";
import Form from "./pages/form/Form";
import Header from "./components/Header";
import NotFound from "./pages/notFound/NotFound";
import Catalog from "./pages/catalog/Catalog";
import Products from "./pages/products/Products";
import FetchTest from "./pages/fetchTest/FetchTest";
import AddProducts from "./pages/addProducts/AddProducts";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/form" element={<Form/>}/>
                <Route path="/catalog" element={<Catalog/>}/>
                <Route path="/catalog/:catalog_name" element={<Products/>}/>
                <Route path="/fetchTest" element={<FetchTest/>}/>
                <Route path="/addProducts" element={<AddProducts/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

/*
http://localhost:3000/catalog - Catalog - страничка где отображается продукция
http://localhost:3000/catalog/:catalog_name - Products - страничка где отображается товары
http://localhost:3000/catalog/ipad - Products

{
   catalog_name:'ipad'
}


http://localhost:3000/catalog/imac - Products

{
   catalog_name:'imac'
}

*/


export default App;