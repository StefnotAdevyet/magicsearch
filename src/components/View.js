import React, { Component } from 'react';
import CardProfile from './cardProfile';

const View = (props) => {


  return (
    <ul container>
      <div className="row"  >
        <div >
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