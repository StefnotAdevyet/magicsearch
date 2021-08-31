import React, { Component } from 'react';
import CardProfile from './cardProfile';

function View ({cardData, searchTerm}) {

 // console.log('props from view: ', cardData)

  return (
    //need to fix key props
    <>
      <ul>{cardData.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((c, key) => <CardProfile key={key} card={c}/>)}</ul>
    </>
  )


}



export default View