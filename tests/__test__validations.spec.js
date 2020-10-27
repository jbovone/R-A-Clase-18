const { generateClient, generateCar } = require('../utils/mockups.gen');
import * as validate from '../src/Validation/validate';

const user = generateClient(true);
const car = generateCar();

console.log(user);
console.log(car);

describe('Validation functions working properly', () => {
  it('test mail validation with a valid email', () => {
    console.log(user);
    expect(validate.isEmailValid(user.email)).toBeTruthy();
  });
  it('test mail validation with a no valid email', () => {
    expect(validate.isEmailValid('asdfhj@)).com')).toBeFalsy();
  });
});
