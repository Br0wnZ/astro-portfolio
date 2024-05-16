const emailPattern =
  /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const emailValidator = (email: string) => emailPattern.test(email || '')
const requiredValidator = (value: string) => value?.length > 2

export { emailValidator, requiredValidator }

