const Automovile = require('../src/Model/Automovile');
const User = require('../src/Model/User');
const Client = require('../src/Model/Client');

/***
 * estos tests necesitan preprocesar los imports del src con webpack y pasarlos a cjs
 * antes de poder functionar.
 * Automovile por lo menos esta probada las otras todavia no (cambie el import statement a mano temporalmente).
 * Por ahora es suficiente para hechar a andar el repositiorio.
 */

const { generatePerson, generateCar } = require('./mockups.gen');

const car = {
  id: 'BWN5KYHQPXSA35092',
  model: 'F-150',
  brand: 'ferrari',
  year: 2020,
  miles: 10000,
  color: 'red',
  passengers: 3,
  gears: 'auto',
  status: 'available',
};

const person = {
  firstName: 'Angelina',
  lastName: 'Rath',
  address: 'Southeast',
  documentType: 'DNI',
  documentNumber: 61900925,
  telephone: 584872221,
  isAdmin: false,
};
const user = {
  id: '9de7e67b-3b89-45cc-b07f-7c23e511b9b4',
  username: 'Delmer.Waters',
  password: 'yojihagaf',
  email: 'Jevon@yahoo.es',
};

const AutomovileInstanceofCar = new Automovile(car);
const UserIntanceofUser = new User(user);
const ClientIntanceofUser = new Client(user, person);

test('swallow Model Automovile intanciating', () => {
  expect(AutomovileInstanceofCar).toEqual(car);
});

test('Model, User intanciating', () => {
  expect(UserIntanceofUser).toEqual(user);
});

test('validates mockups, Client intanciating', () => {
  expect(ClientIntanceofUser).toEqual(car);
});
