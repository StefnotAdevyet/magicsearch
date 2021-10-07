import React from 'react';



const CardDetails = (props) => {
  console.log(props)

  const card = props.currentCard;


  return (

    <div className="container">
      <div className="row" onClick={props.closeCardInfo} style={{ cursor: "pointer", paddingTop: 50 }}>
        <i className="fas fa-arrow-left"></i>
        <span style={{ marginLeft: 10 }}>Go Back</span>

      </div>

      <div className="card-details">
        <img src={card.imageUrl} />


      <table>
        <thead>
          <tr>
            <th>{card.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{card.type}</td>
          </tr>
          <tr>
            <td>{card.text}</td>
          </tr>
        </tbody>
      </table>
      </div>





    </div>

  )


}



export default CardDetails;