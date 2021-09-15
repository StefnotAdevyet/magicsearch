import React from 'react'

const CardProfile = (props) => {



console.log(props);
//need to make card clickable to view card data

    return (
        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                   {
                       props.card.imageUrl === null ? <img src="https://dredgit.com/wp-content/uploads/2013/11/dummy-image-square.jpg" alt="card image" style={{ width: "100%", height: 150 }}/> :
                       <img src={props.card.imageUrl} alt="card image" style={{ width: "100%" }}/>
                   }
                </div>
            </div>
        </div>
    )
}


export default CardProfile