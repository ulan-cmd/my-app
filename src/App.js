import React from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./pages/main/Main";
import About from "./pages/about/About";
import Form from "./pages/form/Form";
import Header from "./components/Header";
import NotFound from "./pages/notFound/NotFound";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/form" element={<Form/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;