import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNews, useTheme } from '../NewsContext/NewsContext';
import { useSavedNews } from '../SavedNewsContext/SavedNewsContext';  // Updated import
import '../NewsDetails/NewsDetails.css'
const NewsDetails = () => {
  const { news } = useNews();
  const { theme, toggleTheme } = useTheme();
  const { index } = useParams();
  const { title, urlToImage, content, url } = news[index];
  const { saveNews } = useSavedNews();  // Use the useSavedNews hook correctly

  const handleSave = () => {
    saveNews({ title, urlToImage, content, url });
    alert('News saved successfully!');
  };

  return (
    <div className={`news-details-container ${theme}`}>
      <Link to="/" className="back-btn">
        Back to Home
      </Link>
      <button onClick={handleSave} className="save-btn">
        Save
      </button>
      <div className="details-card">
        <img src={urlToImage} alt={title} className="details-image" />
        <div className="details-content">
          <h2>{title}</h2>
          <p>{content}</p>
          <a href={url} target="_blank" rel="noopener noreferrer" className="read-more">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
