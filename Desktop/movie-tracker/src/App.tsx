import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as randomWord from 'random-words'
import Home from "./components/Home/Home";
import About from "./components/About/About";
import NotFound from "./components/Notfound/NotFound";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const word = randomWord()
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home props={word}  key={0} type={0}/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
