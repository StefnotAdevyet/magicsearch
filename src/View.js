import React, { Component } from 'react';
import CardProfile from './cardProfile';

function View ({cardData}) {

  console.log('props from view: ', cardData)

  return (
    //need to fix key props
    <>
      <ul>{cardData.map((c, key) => <CardProfile key={key} card={c}/>)}</ul>
    </>
  )


}



export default View