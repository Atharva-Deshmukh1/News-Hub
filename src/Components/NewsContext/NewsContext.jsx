import React, { createContext, useState, useEffect, useContext } from 'react';

export const NewsContext = createContext();
export const ThemeContext = createContext();

const ContextProvider = ({ children }) => {
  // News Context
  const [news, setNews] = useState([]);
  const APIkey = "f2899569196342ddac52e1a469e29094";
  const country = "in";

  const getNews = async () => {
    try {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${APIkey}`);
      const data = await response.json();
      setNews(data.articles);
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  const newsContextValue = { news, getNews };

  // Theme Context
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const themeContextValue = { theme, toggleTheme };

  return (
    <NewsContext.Provider value={newsContextValue}>
      <ThemeContext.Provider value={themeContextValue}>
        {children}
      </ThemeContext.Provider>
    </NewsContext.Provider>
  );
};

export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error('useNews must be used within a ContextProvider');
  }
  return context;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ContextProvider');
  }
  return context;
};

export default ContextProvider;  // Corrected export
export const ThemeProvider = ContextProvider;  // Named export for ThemeProvider
