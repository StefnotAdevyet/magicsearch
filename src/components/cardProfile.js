import React from 'react'

const CardProfile = (props) => {



console.log(props);
//need to make card clickable to view card data

    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <img src={props.card.imageUrl} />
                </div>
            </div>
        </div>
    )
}


export default CardProfile