import React from 'react';

const Paginate = (props) => {

  const pageLinks = [];

  for(let i = 1; i <= props.pages + 1; i++) {
    let active = props.currentPage === i ? 'active' : "";
    pageLinks.push(<li className={`waves-effect ${active}`} key={i} onClick={() => props.nextPage(i)}><a href="#">{i}</a></li>)
  }

  return (
    <div className="container">
      <div className="row">
        <ul className="paginate">
          {
            pageLinks
          }
        </ul>
      </div>
    </div>
  )
}


export default Paginate