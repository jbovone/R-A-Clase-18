import Automovile from '../src/Entities/Automobile';
import User from '../src/Entities/User';
import Client from '../src/Entities/Client';

const { generateClient, generateCar } = require('../utils/mockups.gen');

const car = {
  id: 43,
  model: 'F-150',
  brand: 'ferrari',
  year: 2020,
  miles: 10000,
  color: 'red',
  passengers: 4,
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
  category: 1,
  bornDate: '2/3/75',
};
const user = {
  id: 32,
  username: 'Delmer.Waters',
  password: 'yojihagaf',
  email: 'Jevon@yahoo.es',
  category: 1,
};

const instanceOfCar = new Automovile(car);
const instanceOfUser = new User(user);
const instanceOfClient = new Client({ ...user, ...person });

describe('tests swallowly the models integrity', () => {
  test('Model Automovile intanciating', () => {
    expect(instanceOfCar).toEqual(car);
    expect(instanceOfCar).toBeInstanceOf(Automovile);
    Object.values(instanceOfCar).forEach(prop => expect(prop).not.toEqual(undefined));
  });

  test('Model User intanciating', () => {
    expect(instanceOfUser).toEqual(user);
    expect(instanceOfUser).toBeInstanceOf(User);
    Object.values(instanceOfUser).forEach(prop => expect(prop).not.toEqual(undefined));
  });

  test('Model Client intanciating', () => {
    expect(instanceOfClient).toEqual({ ...user, ...person });
    expect(instanceOfClient).toBeInstanceOf(Client);
    Object.values(instanceOfClient).forEach(prop => expect(prop).not.toEqual(undefined));
  });
});

const newInstanceOfCar = new Automovile(generateCar());
const newInstanceOfUser = new User(generateClient(true));
const newInstanceOfClient = new Client(generateClient());

describe('tests mockup generation against Models', () => {
  console.log(newInstanceOfUser);
  test('Random Car fits in Model', () => {
    expect(newInstanceOfCar).toBeInstanceOf(Automovile);
    Object.values(newInstanceOfCar).forEach(prop => expect(prop).not.toEqual(undefined));
  });
  test('Random User fits in Model', () => {
    expect(newInstanceOfUser).toBeInstanceOf(User);
    Object.values(newInstanceOfUser).forEach(prop => prop === 'id' && expect(prop).not.toEqual(undefined));
  });

  test('Random Client fits in Model', () => {
    expect(newInstanceOfClient).toBeInstanceOf(User);
    Object.values(newInstanceOfClient).forEach(prop => prop === 'id' && expect(prop).not.toEqual(undefined));
  });
});
