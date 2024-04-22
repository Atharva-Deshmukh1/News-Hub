import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNews, useTheme } from '../NewsContext/NewsContext';
import { useSavedNews } from '../SavedNewsContext/SavedNewsContext';
import './NewsDetails.css';

const NewsDetails = () => {
  const { news } = useNews();
  const { theme } = useTheme();
  const { index } = useParams();
  const { title, urlToImage, description, url, content } = news[index];
  const { saveNews } = useSavedNews();

  const handleSave = () => {
    saveNews({ title, urlToImage, description, url });
    alert('News saved successfully!');
  };

  return (
    <div className={`news-details-container ${theme}`}>
      <Link to="/News-Hub" className="back-btn">
        Back to Home
      </Link>
      <button onClick={handleSave} className="save-btn">
        Save
      </button>
      <div className="card-cont">
        <img src={urlToImage} alt={title} className="details-image" />
        <div className="details-content">
          <h2>{title}</h2>
          <p>{description}</p>
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