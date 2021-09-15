import React, { useState, useEffect } from 'react';
import Search from './Search';
import Paginate from './Paginate'
import View from './View'
import axios from 'axios';




//import './App.css'
/*
need to add the api call response to the component so it renders
the first item in the response data when the app start up
*/


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      cards: [],
      searchTerm: '',
      totalResults: 0,
      currentPage: 1,
      currentCard: null
    }

  }

  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [cardData, setCardData] = useState([]);
  // const [currentPage, setCurrentPage] = useState(endpoint);
  // const [pageIndex, setPageIndex] = useState(1)
  // const [nextPage, setNextPage] = useState('');
  // const [previousPage, setPreviousPage] = useState('');
  // const [searchTerm, setSearchTerm] = useState('')

  //var parse = require('parse-link-header')



  // useEffect(() => {
  //   const fetchCards = async () => {
  //     setIsLoaded(true);
  //     const res = await axios.get(currentPage);
  //     let next = parse(res.headers.link).next.url;
  //     let last = parse(res.headers.link).last.url;
  //     setPreviousPage(last);
  //     setNextPage(next);
  //     setCardData(res.data.cards);
  //     setIsLoaded(false);
  //   }

  //   fetchCards();
  // }, [currentPage]);

  handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api.magicthegathering.io/v1/cards?name=${this.state.searchTerm}`)
         .then((res) => {
           console.log('res data: ', res.headers["total-count"])
           this.setState({
             cards: res.data.cards,
             totalResults: res.headers["total-count"]
           })
         })
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  nextPage = (pageNumber) => {
    axios.get(`https://api.magicthegathering.io/v1/cards?name=${this.state.searchTerm}&page=${pageNumber}`)
         .then((res) => {
           console.log('res data: ', res.headers)
           this.setState({
             cards: res.data.cards,
             currentPage: pageNumber

           })
         })
  }

  // function goToNextPage () {
  //   setCurrentPage(nextPage);
  //   console.log(nextPage)
  // }

  // function goToPreviousPage () {
  //   setCurrentPage(previousPage);
  // }




render() {
  const numberPages = Math.floor(this.state.totalResults / 100);

  return (
    <div className="app">

        <div>
          <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
          <View cards={this.state.cards} />
          {
          this.state.totalResults > 100 ? <Paginate pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/>
          : ""
          }
        </div>

    </div>
  )
    }


};




  export default App;
