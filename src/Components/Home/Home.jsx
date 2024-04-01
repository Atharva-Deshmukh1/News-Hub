import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { NewsContext, useTheme } from '../NewsContext/NewsContext'; 
import '../Home/Home.css';

const Home = () => {
  const { news, getNews, setCountry } = useContext(NewsContext);
  const { theme } = useTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 10;

  const totalPages = Math.ceil(news.length / itemsPerPage);

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    getNews();
    setCurrentPage(1); // Reset to the first page when country changes
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const displayedNews = news
    .filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className={`news-container ${theme}`}>
      <h1 className="heading">Latest News</h1>

      {/* Country Selection Dropdown */}
      <div className="country-select">
        <label htmlFor="country">Select Country: </label>
        <select id="country" onChange={handleCountryChange}>
          <option value="in">India</option>
          <option value="us">USA</option>
          <option value="ch">UK</option>
          {/* Add other countries as needed */}
        </select>
      </div>

      {/* Search Input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search news..."
          className="search-bar"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className="containerr">
        {displayedNews.map((item, index) => (
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

      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={currentPage === pageNumber ? 'active' : ''}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
