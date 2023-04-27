import React from 'react'

const Trending = () => {
  return (
    <div className="Trending">
      <div className="trending-left">
        <h2 className="trending-left-p">Trending</h2>
        <h2 className="trending-left-para">Top</h2>
      </div>
      <div className="trending-right">
        <div className="trending-right-a">
          <a className="trending-right-anchor" href="#">
            1h
          </a>
          <a className="trending-right-a-tag" href="#">
            6h
          </a>
          <a className="trending-right-a-tag" href="#">
            24h
          </a>
          <a className="trending-right-a-tag" href="#">
            7d
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Resources</a>
              <ul>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Learn</a>
                </li>
                <li>
                  <a href="#">HelpCenter</a>
                </li>
                <li>
                  <a href="#">Taxes</a>
                </li>
                <li>
                  <a href="#">Partners</a>
                </li>
                <li>
                  <a href="#">Activity</a>
                </li>
                <li>
                  <a href="#">Calender</a>
                </li>
                <li>
                  <a href="#">LearnMore</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <button className="trending-right-btn">ViewAll</button>
      </div>
    </div>
  )
}

export default Trending
