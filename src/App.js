import React, { useState, useEffect } from 'react';
import endpoint from './config';
import CardProfile from './cardProfile';
import Search from './Search';
import Paginate from './Paginate'
import View from './View'
import axios from 'axios';




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



  useEffect(() => {
    setIsLoaded(false)
    axios.get(currentPage).then( res => {
      setNextPage(res.headers.link.split(' ')[2].toString().replaceAll(">", "").replaceAll("<", ""))
      setPreviousPage(res.headers.link.split(' ')[0].toString().replaceAll(">", "").replaceAll("<", ""))
      setIsLoaded(true)
      setCardData(res.data.cards.map(c => c))
    })

  }, [currentPage]);

  function goToNextPage () {
    setCurrentPage(nextPage);
  }

  function goToPreviousPage () {
    setCurrentPage(previousPage);
  }



  return (
    <>

      <View id="view" cardData={cardData} />

    <Paginate goToNextPage={goToNextPage}
              goToPreviousPage={goToPreviousPage}
              pageIndex={pageIndex}/>
    </>
  )


};




  export default App;
