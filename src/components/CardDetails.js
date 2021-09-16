import React from 'react';



const CardDetails = (props) => {
  console.log(props)

  const card = props.currentCard;


  return (

    <div className="container">
      <div className="row">
        <i className="fas fa-arrow-left"></i>
        <span style={{ marginLeft: 10 }} onClick={() => props.closeCardInfo()}>Go Back</span>

      </div>
      <div className="row">
        {
          card.imgUrl === null ?
            <img src="" alt="Card image" />
            :
            <img src={card.imageUrl} />
        }
        <div className="col s12 m8">
          <div className="info-container">
            <p>{card.cmc}</p>
            <p>{card.text}</p>
          </div>
        </div>
      </div>

    </div>

  )


}



export default CardDetails;