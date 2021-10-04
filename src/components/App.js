import React, { useState, useEffect } from 'react';
import Search from './Search';
import Paginate from './Paginate'
import View from './View'
import axios from 'axios';
import CardDetails from './CardDetails';


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

  viewCardInfo = (id) => {
    const filteredCard = this.state.cards.filter(card => card.id === id)

    const newCurrentCard = filteredCard.length > 0 ? filteredCard[0] : null

    this.setState({
      currentCard: newCurrentCard
    })
  }

  closeCardInfo = () => {
    this.setState({
      currentCard: null
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
      {

        this.state.currentCard === null ?
          <div>
            <h1 className="heading">
            MagicSearch

            </h1>

            <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
            <View viewCardInfo={this.viewCardInfo} cards={this.state.cards} />
          </div>
          :
          <CardDetails currentCard={this.state.currentCard} closeCardInfo={this.closeCardInfo} />

      }

      {
        this.state.totalResults > 100 && this.state.currentCard === null ? <Paginate pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage} />
          : ""
      }


    </div>
  )
    }


};




  export default App;
