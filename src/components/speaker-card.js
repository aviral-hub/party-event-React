import React from 'react'

import PropTypes from 'prop-types'

import './speaker-card.css'

const SpeakerCard = (props) => {
  return (
    <div className={`speaker-card-speaker-card ${props.rootClassName} `}>
      <div className="speaker-card-image-container">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="speaker-card-image"
        />
      </div>
      <span className="speaker-card-first-name">{props.firstName}</span>
      <span className="speaker-card-last-name">{props.lastName}</span>
      <span className="speaker-card-text">{props.role}</span>
    </div>
  )
}

SpeakerCard.defaultProps = {
  rootClassName: '',
  firstName: 'Jonathan',
  lastName: 'carey',
  imageAlt: 'image',
  role: 'brand manager @ pepsi',
  imageSrc:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&ixlib=rb-1.2.1&w=300',
}

SpeakerCard.propTypes = {
  rootClassName: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  imageAlt: PropTypes.string,
  role: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default SpeakerCard
