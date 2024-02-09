import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
