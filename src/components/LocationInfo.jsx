import React from 'react'

const LocationInfo = ({location}) => {
   
  return (
    <article className='location-box'>
    <div className='resident-card-location'>
      <section className='resident-card-location-section'>
        <h2 className='resident-card-location-header'>{location?.name}</h2>
        <ul className='horizontal-display'>
            <li><span>Type </span>{location?.type}</li>
            <li><span>Dimension </span>{location?.dimension}</li>
            <li><span>Population </span>{location?.residents.length}</li>
        </ul>
        </section>
    </div>
    </article>
  )
}

export default LocationInfo