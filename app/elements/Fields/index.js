import React, { PropTypes } from 'react'
import classNames from 'classnames/bind'

import s from './styles.scss'

// Bind classnames to stylesheet
const cx = classNames.bind(s)

export const FieldWrapper = ({ children, error, label, htmlFor }) => {
  const labelElement = (label)
    ? <label className={s.label} htmlFor={htmlFor}>{label}:</label>
    : null
  const errorElement = (error)
    ? <div className={s.error}>{error}</div>
    : null

  return (
    <div className={s.fieldWrapper}>
      {labelElement}
      {children}
      {errorElement}
    </div>
  )
}
FieldWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  htmlFor: PropTypes.string,
  label: PropTypes.string
}

export const Input = ({ input, meta: { touched, error }, ...custom }) => {
  const className = cx({
    input: true,
    inputError: touched && error
  })

  return (
    <FieldWrapper error={touched && error}
      label={custom.label}
      htmlFor={custom.id}>
      <input className={className}
        {...input}
        {...custom} />
    </FieldWrapper>
  )
}
Input.propTypes = {
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
  placeholder: PropTypes.string,
  type: PropTypes.string
}
Input.defaultProps = {
  type: 'text'
}

export const Select = () => (
  <select>
    <option selected>Choose an item...</option>
    <option value='1'>One</option>
    <option value='2'>Two</option>
    <option value='3'>Three</option>
  </select>
)

export const Checkbox = ({ input, meta: { touched, error }, name, ...custom }) => {
  const className = cx({
    checkbox: true
  })

  return (
    <FieldWrapper error={touched && error}>
      <label className={s.label}
        htmlFor={name}>
        <input className={className}
          id={name}
          name={name}
          {...input}
          {...custom} />
        {custom.label}
      </label>
    </FieldWrapper>
  )
}
Checkbox.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  defaultChecked: PropTypes.bool,
  id: PropTypes.string,
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
  name: PropTypes.string,
  type: PropTypes.string
}
Checkbox.defaultProps = {
  type: 'checkbox'
}

export const Radio = () => (
  <input type='radio' />
)

export const Switch = () => (
  <input type='checkbox' />
)

export const TextArea = () => (
  <textarea>Textarea input</textarea>
)

export const FileUpload = () => (
  <input type='file' />
)
