import React, { Component } from 'react';
import CardProfile from './cardProfile';

function View ({cardData}) {

  console.log('props from view: ', cardData)

  return (
    cardData.map(c => <div>{c}</div>)
  )


}



export default View