import React from 'react'

const CardProfile = (props) => {



console.log(props);

    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <div className="name">{props.card.name}</div>
                    <img src={props.card.imageUrl} />
                </div>
            </div>
        </div>
    )
}


export default CardProfile