
export const required = value =>
  value || typeof value === 'number' ? undefined : 'The field cannot be empty'

export const onlySpaces = value =>
  value.trim() == '' ? 'The string cannot contain only spaces' : undefined

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

export const phoneNumber = value =>
  value && !/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(value)
    ? 'Enter a valid phone number'
    : undefined

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined

export const maxLength20 = maxLength(20)
export const maxLength25 = maxLength(25)

const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined

export const minLength2 = minLength(2)
