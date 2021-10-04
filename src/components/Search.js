import React from 'react';


const Search = (props) => {



    return (
      <div className="container">
        <div className="row search">
          <section>
            <form action="" onSubmit={props.handleSubmit}>
              <div className="input-field">
                <input placeholder="Search Card" type="text" onChange={props.handleChange}/>
              </div>
            </form>
          </section>
        </div>

      </div>

    )
  }


export default Search