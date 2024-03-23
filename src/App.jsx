
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Nopage from "./pages/Nopage";
import Projects from "./pages/Projects";


function App() {
  return( 
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route index element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/team" element={<Team />} />
    <Route path="*" element={<Nopage />} />
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
