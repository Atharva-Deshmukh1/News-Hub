import React, { useEffect, useState } from 'react';
import '../Home/Home.css'
const Home = () => {
  const [news, setNews] = useState([]);
  const APIkey = "f2899569196342ddac52e1a469e29094";
  const country = "in";

  const getNews = async () => {
    try {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${APIkey}`);
      const data = await response.json();
      setNews(data.articles);
      console.log(data.articles);
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="news-container">
      <h1 className="heading">Latest News</h1>
      <div className="containerr">
        {news.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.urlToImage} alt={item.title} className="card-image" />
            <div className="card-content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="read-more">
                Read more
              </a>
            </div> 
          </div>
        ))}
      
      
      </div>
    </div>
  );
};

export default Home;

