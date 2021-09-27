import React, { Component } from 'react';
import CardProfile from './cardProfile';

const View = (props) => {


  return (
    <ul className="container" style={{display: "flex", flexDirection: "row"}}>
      <div className="row" >
        <div className="col s12">
          <ul>
            {
              props.cards.map((c, i) => {
                return <CardProfile key={i} card={c} viewCardInfo={props.viewCardInfo} cardId={c.id} />
              })
            }
          </ul>
        </div>
      </div>
    </ul>
  )


}



export default View