import React, { useState } from 'react'

const ReadMore = ({ children }) => {
  const text = children
  const [isReadMore, setIsReadMore] = useState(true)
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore)
  }

  return (
    <p className="text">
      {isReadMore ? text.slice(0, 109) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? <b>...read more</b> : <b>show less</b>}
      </span>
    </p>
  )
}
export default ReadMore
