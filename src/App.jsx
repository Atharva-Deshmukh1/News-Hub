import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import NewsDetails from './Components/NewsDetails/NewsDetails';
import About from './Components/About/About';
import LogIn from './Components/LogIn/LogIn';
import NewsContextProvider, { ThemeProvider } from './Components/NewsContext/NewsContext';  // Adjusted import
import SavedNews from './Components/SavedNews/SavedNews';

function App() {
  return (
    <ThemeProvider>  {/* Updated to use ThemeProvider */}
      <NewsContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<LogIn />} />
            <Route path="/news/:index" element={<NewsDetails />} />
            <Route path="/saved" element={<SavedNews />} />
          </Routes>
        </Router>
      </NewsContextProvider>
    </ThemeProvider>
  );
}

export default App;
