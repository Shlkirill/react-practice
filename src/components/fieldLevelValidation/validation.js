import React from 'react'
import { Field, reduxForm } from 'redux-form'

export const required = value =>
  value || typeof value === 'number' ? undefined : 'Поле не может быть пустым'

export const onlySpaces = value =>
  value.trim() == '' ? 'The string cannot contain only spaces' : undefined


const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined

const maxLength15 = maxLength(15)

const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined

export const minLength2 = minLength(2)
