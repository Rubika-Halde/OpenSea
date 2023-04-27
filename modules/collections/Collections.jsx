import React from 'react'

const Collections = () => {
  return (
    <div className="Collections">
      <div className="colltions-right">
        <div className="colltions-right-one">
          <p className="colltions-right-p">COLLECTION</p>
        </div>
        <div className="colltions-right-one-para">
          <a className="colltions-right-two">FLOORPRICE</a>
          <a className="colltions-right-two">VOLUME</a>
        </div>
      </div>
      <div className="colltions-left">
        <div className="colltions-left-one">
          <p>COLLECTION</p>
        </div>
        <div className="colltions-left-one-price">
          <a href="#">FLOORPRICE</a>
          <a href="#">VOLUME</a>
        </div>
      </div>
    </div>
  )
}

export default Collections
