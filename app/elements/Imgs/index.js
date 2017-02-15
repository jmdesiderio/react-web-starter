import React, { PropTypes } from 'react'

export function Img (props) {
  return (
    <img alt={props.alt} className={props.className} src={props.src} />
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
