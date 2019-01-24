import React from 'react'

export default ({ results }) => {
  if (results.length === 0) return <h4>Try a Search Above</h4>
  return (
    <div>
      {results.map(function (results, index) {
        return <img
            key={index}
            src={results.images.original.url}
            height='200px'
            width='200px'
        />
      })}
    </div>
  )
}
