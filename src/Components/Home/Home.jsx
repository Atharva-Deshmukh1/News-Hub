import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NewsContext } from '../NewsContext/NewsContext';
import '../Home/Home.css';
const Home = () => {
  const { news } = useContext(NewsContext);

  return (
    <div className="news-container">
      <h1 className="heading">Latest News</h1>
      <div className="containerr">
        {news.map((item, index) => (
          <Link 
            to={`/news/${index}`}
            key={index}
            className="card-link"
          >
            <div className="card">
              <img src={item.urlToImage} alt={item.title} className="card-image" />
              <div className="card-content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="read-more">
                  Read more
                </a>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;

