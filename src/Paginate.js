import React from 'react';

function Paginate ({ goToPreviousPage, goToNextPage, pageIndex }) {


  return (
    <>
    <button onClick={goToPreviousPage}>prev</button>

    <button onClick={goToNextPage}>next</button>
    </>
  )
}


export default Paginate