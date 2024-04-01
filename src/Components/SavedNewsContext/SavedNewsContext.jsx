import { createContext, useState, useEffect, useContext } from 'react';

export const SavedNewsContext = createContext();

export const SavedNewsProvider = ({ children }) => {
  const savedNewsFromLocalStorage = localStorage.getItem('savedNews');

  let initialSavedNews;
  try {
    initialSavedNews = savedNewsFromLocalStorage ? JSON.parse(savedNewsFromLocalStorage) : [];
  } catch (error) {
    console.error('Error parsing savedNews from localStorage:', error);
    initialSavedNews = [];
  }

  const [savedNews, setSavedNews] = useState(initialSavedNews);

  useEffect(() => {
    try {
      localStorage.setItem('savedNews', JSON.stringify(savedNews));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }, [savedNews]);

  const saveNews = (newsItem) => {
    setSavedNews((prev) => [...prev, newsItem]);
  };

  const removeNews = (index) => {
    setSavedNews((prev) => {
      const updatedNews = [...prev];
      updatedNews.splice(index, 1);
      return updatedNews;
    });
  };

  return (
    <SavedNewsContext.Provider value={{ savedNews, saveNews, removeNews }}>
      {children}
    </SavedNewsContext.Provider>
  );
};

export const useSavedNews = () => {
  const context = useContext(SavedNewsContext);
  if (!context) {
    throw new Error('useSavedNews must be used within a SavedNewsProvider');
  }
  return context;
};
