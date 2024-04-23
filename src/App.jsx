import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import NewsDetails from './Components/NewsDetails/NewsDetails';
import About from './Components/About/About';
import LogIn from './Components/LogIn/LogIn';
import NewsContextProvider, { ThemeProvider } from './Components/NewsContext/NewsContext';
import { SavedNewsProvider } from './Components/SavedNewsContext/SavedNewsContext';  // Updated import
import SavedNews from './Components/SavedNews/SavedNews';

function App() {
  return (
    <ThemeProvider>
      <NewsContextProvider>
        <SavedNewsProvider>  {/* Ensure SavedNewsProvider wraps NewsDetails */}
          <Router>
            <Navbar />
            <Routes>
              <Route path='/News-Hub' element={<Home />} />
              <Route path='/News-Hub/about' element={<About />} />
              <Route path='/News-Hub/login' element={<LogIn />} />
              <Route path="/News-Hub/news/:index" element={<NewsDetails />} />  {/* NewsDetails component here */}
              <Route path="/News-Hub/saved" element={<SavedNews />} />
            </Routes>
          </Router>
        </SavedNewsProvider>
      </NewsContextProvider>
    </ThemeProvider>
  );
}

export default App;
