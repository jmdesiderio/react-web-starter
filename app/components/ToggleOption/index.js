import React, { PropTypes } from 'react'
import { injectIntl, intlShape } from 'react-intl'

const ToggleOption = ({ value, message, intl }) => (
  <option value={value}>
    {message ? intl.formatMessage(message) : value}
  </option>
)

ToggleOption.propTypes = {
  intl: intlShape.isRequired,
  message: PropTypes.shape({
    defaultMessage: PropTypes.string,
    id: PropTypes.string
  }),
  value: PropTypes.string.isRequired
}

export default injectIntl(ToggleOption)
