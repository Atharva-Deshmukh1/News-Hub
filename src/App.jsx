import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Components/About/About'
import '../src/Style/Style.css'
import { ThemeProvider } from './ThemeContext'
import LogIn from './Components/LogIn/LogIn'

function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/LogIn' element={<LogIn />} />
        
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
