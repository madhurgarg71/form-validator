import { validatePhone } from './../validate'

test('Empty mobile number', () => {
  expect(validatePhone('')).toMatchObject({ status: true, value: 'Mobile number is required' })
})


test('Invalid mobile number', () => {
  expect(validatePhone('32232')).toMatchObject({ status: true, value: 'Mobile number is invalid' })
})

test('Invalid number', () => {
  expect(validatePhone('fewfewf')).toMatchObject({ status: true, value: 'Mobile number is invalid' })
})
