import React from 'react'

const SingleCard = ({alldata}) => {
    
  return (
    <div className="card">
  <img className="card-img-top" src={alldata.avatar_url} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{alldata.login}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a target='_blank' href={alldata.html_url} className="btn btn-dark">More Info</a>
  </div>
</div>

  )
}

export default SingleCard