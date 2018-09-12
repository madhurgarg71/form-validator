import { validateEmail } from './../validate'

test('Empty email', () => {
  expect(validateEmail('')).toMatchObject({ status: true, value: 'Email is required' });
})

test('Valid email', () => {
  expect(validateEmail('madhurgarg71@gmail.com')).toMatchObject({ status: false, value: '' });
})

test('Invalid email', () => {
  expect(validateEmail('madhurgarg71#gmail.com')).toMatchObject({ status: true, value: 'Email is invalid' });
})
