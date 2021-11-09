import React, { Component } from 'react';
import CardProfile from './cardProfile';

const View = (props) => {


  return (

    <div className="container">


        <div className="card-grid">
          {
            props.cards.map((c, i) => {
              return <CardProfile key={i} card={c} viewCardInfo={props.viewCardInfo} cardId={c.id} />
            })
          }
        </div>

      </div>


  )


}



export default View