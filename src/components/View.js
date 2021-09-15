import React, { Component } from 'react';
import CardProfile from './cardProfile';

const View = (props) => {

//  console.log('props from view: ', props)

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <ul>
            {
              props.cards.map((c, i) => {
                return <CardProfile key={i} card={c} />
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )


}



export default View