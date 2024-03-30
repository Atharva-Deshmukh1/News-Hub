// import React, { useContext, useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { NewsContext } from '../NewsContext/NewsContext';
// import { useTheme } from '../NewsContext/NewsContext';
// import '../Home/Home.css';

// const Home = () => {
//   const { news } = useContext(NewsContext);
//   const { theme } = useTheme();

//   const [page, setPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   }

//   const filteredNews = news.filter(newsItem =>
//     searchQuery.split(' ').some(word =>
//       newsItem.title.toLowerCase().includes(word.toLowerCase())
//     )
//   );

//   const selectedPage = (changedPage) => {
//     if (
//       changedPage >= 1 &&
//       changedPage <= Math.ceil(filteredNews.length / 10) &&
//       changedPage !== page
//     )
//       setPage(changedPage)
//   }

//   useEffect(() => {
//     setPage(1); // Reset page when news changes
//   }, [news]);

//   return (
//     <div className={`news-container ${theme}`}>
//       <h1 className="heading">Latest News</h1>
//       <div className='search-container bg-gray-200 rounded-xl mx-[10%] w-[80%] p-2'>
//         <input
//           type="text"
//           placeholder="Search news..."
//           value={searchQuery}
//           onChange={handleSearch}
//           className="w-full px-3 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
//         />
//       </div>
//       <div className="containerr">
//         {filteredNews.slice(page * 9 - 9, page * 9).map((item, index) => (
//           <Link
//             to={`/news/${index}`}
//             key={index}
//             className="card-link"
//           >
//             <div className="card">
//               <img src={item.urlToImage} alt={item.title} className="card-image" />
//               <div className="card-content">
//                 <h2>{item.title}</h2>
//                 <p>{item.description}</p>
//                 <a href={item.url} target="_blank" rel="noopener noreferrer" className="read-more">
//                   Read more
//                 </a>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//       <div className='pagination bg-red-700 h-20 w-full flex justify-center items-center'>
//         <span
//           className={`cursor-pointer p-2 ${page !== 1 ? "" : "hidden"}`}
//           onClick={() => selectedPage(page - 1)}
//         >◀️
//         </span>
//         {[...Array(Math.ceil(filteredNews.length / 10))].map((_, index) => (
//           <span
//             key={index}
//             className={`cursor-pointer p-2 ${page === index + 1 && "text-white font-bold"}`}
//             onClick={() => selectedPage(index + 1)}
//           >{index + 1}</span>
//         ))}
//         <span
//           className={`cursor-pointer p-2 ${page !== Math.ceil(filteredNews.length / 10) ? "" : "hidden"}`}
//           onClick={() => selectedPage(page + 1)}
//         >▶️
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { NewsContext, useTheme } from '../NewsContext/NewsContext'; 
import '../Home/Home.css';

const Home = () => {
  const { news, getNews, setCountry } = useContext(NewsContext);
  const { theme } = useTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(news.length / itemsPerPage);

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    getNews();
    setCurrentPage(1); // Reset to the first page when country changes
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const displayedNews = news.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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
