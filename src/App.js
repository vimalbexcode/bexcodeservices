// import { Routes, Route, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from './Front/Pages/Home/IndexHome';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} >Home</Route>
                {/* <Route path="/contact-us" element={<Contact />} />
                <Route path="/about" element={<AboutUs />} /> */}
                {/* these 3 page are same  */}
                {/* <Route path="/monaghan-medical" element={<Products />} />
                <Route path="/product" element={<Navigate to="/monaghan-medical" replace />} />
                <Route path="/products" element={<Navigate to="/monaghan-medical" replace />} /> */}

            </Routes>
        </>
    );
}

export default App;
