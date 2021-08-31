import React, { useState, useEffect } from 'react';
import endpoint from './config';
import CardProfile from './cardProfile';
import Search from './Search';
import Paginate from './Paginate'
import View from './View'
import axios from 'axios';
import './App.css';




//import './App.css'
/*
need to add the api call response to the component so it renders
the first item in the response data when the app start up
*/


function App () {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [currentPage, setCurrentPage] = useState(endpoint);
  const [pageIndex, setPageIndex] = useState(1)
  const [nextPage, setNextPage] = useState();
  const [previousPage, setPreviousPage] = useState();
  const [searchTerm, setSearchTerm] = useState('')



  useEffect(() => {
   const fetchCards = async () => {
     setIsLoaded(true);
     const res = await axios.get(currentPage);
     setCardData(res.data.cards);
     setIsLoaded(false);
    }

    fetchCards();
  }, []);

  function goToNextPage () {
    setCurrentPage(nextPage);
    console.log(nextPage)
  }

  function goToPreviousPage () {
    setCurrentPage(previousPage);
  }



  return (
    <div className="app">
      <div className="search">
        <input type="text"
               placeholder="Search..."
               onChange={(e) => {
                 setSearchTerm(e.target.value);
               }}
               />
      </div>
      <div className="view">
      <View searchTerm={searchTerm}cardData={cardData} />
      </div>
      <div className="paginate" >

      <Paginate goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
        pageIndex={pageIndex} />
      </div>
    </div>
  )


};




  export default App;
