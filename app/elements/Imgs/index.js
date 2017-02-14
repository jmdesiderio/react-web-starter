import React, { PropTypes } from 'react'

export function Img (props) {
  return (
    <img className={props.className} src={props.src} alt={props.alt} />
  )
}

Img.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired
}
