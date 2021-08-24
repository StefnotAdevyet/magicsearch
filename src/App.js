import React, { useState, useEffect } from 'react';
import endpoint from './config';
import CardProfile from './cardProfile';
import Search from './Search';
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



  useEffect(() => {
    setIsLoaded(false)
    axios.get(endpoint).then( res => {
      setIsLoaded(true)
      setCardData(res.data.cards.map(c => c.name))
    })

  }, []);




  return (
    <>
    <View cardData={cardData} />
    </>
  )


};




  export default App;
