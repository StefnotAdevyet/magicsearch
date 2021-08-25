import React from 'react';

function Paginate ({ goToPreviousPage, goToNextPage, pageIndex }) {


  return (
    <>
    <button onClick={goToPreviousPage}>prev</button>
    <div>{pageIndex}</div>
    <button onClick={goToNextPage}>next</button>
    </>
  )
}


export default Paginate