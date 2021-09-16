import React from 'react';



const CardDetails = (props) => {
  console.log(props)



  return (

    <div className="container">
      <div className="row">
        <i className="fas fa-arrow-left"></i>
        <span style={{ marginLeft: 10 }}>Go Back</span>

      </div>
      <div className="row">
        {
          props.currentCard.imgUrl === null ?
          <img src="" alt="Card image" />
          :
          <img src={props.currentCard.imageUrl} />
        }
      </div>

    </div>

  )


}



export default CardDetails;