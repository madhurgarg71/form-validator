import { validatePlainText } from './../validate'

test('Empty text', () => {
  expect(validatePlainText('', 'Name')).toMatchObject({ status: true, value: 'Name is required' })
})
