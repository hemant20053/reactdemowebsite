import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import './media.css'
import Home from './Pages/Home';
import Aboutus from "./Pages/Aboutus";
import Gallery from './Pages/Gallery';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Headerdata from './Component/Headerdata';
import Footerdata from './Component/Footerdata';

function App() {

  return (
    <>
      <BrowserRouter>
        <Headerdata />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footerdata />
      </BrowserRouter>
    </>
  )
}

export default App
