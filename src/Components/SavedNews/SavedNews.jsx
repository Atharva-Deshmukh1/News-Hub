
import React, { useContext } from 'react';
import { SavedNewsContext } from '../SavedNewsContext/SavedNewsContext';
import { Link } from 'react-router-dom';
import { useTheme } from '../NewsContext/NewsContext'; 
import '../SavedNews/SavedNews.css';

const SavedNews = () => {
  const { savedNews, removeNews } = useContext(SavedNewsContext);
  const { theme } = useTheme(); 

  const handleRemove = (index) => {
    removeNews(index);
  };

  return (
    <div className={`saved-news-container ${theme}`}>
      <h1 className={`title ${theme}`}>Saved News</h1>
      <ul>
        {savedNews.map((item, index) => (
          <li key={index}>
            <img src={item.urlToImage} alt={item.title} className="saved-image" />
            <a className={`link ${theme}`} href={item.url} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
            <button onClick={() => handleRemove(index)} className="remove-btn">
              Remove
            </button>
          </li>
        ))}
      </ul>
      <Link to="/" className="back-btn">
        Back to Home
      </Link>
    </div>
  );
};

export default SavedNews;

