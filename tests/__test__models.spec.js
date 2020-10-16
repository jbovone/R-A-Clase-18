import Automovile from './../src/Model/Automovile';
import User from './../src/Model/User';
import Client from './../src/Model/Client';

const { generateClient, generateCar } = require('./mockups.gen');

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
  bornDate: '2/3/75',
};
const user = {
  id: '9de7e67b-3b89-45cc-b07f-7c23e511b9b4',
  username: 'Delmer.Waters',
  password: 'yojihagaf',
  email: 'Jevon@yahoo.es',
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
  test('Random Car fits in Model', () => {
    expect(newInstanceOfCar).toBeInstanceOf(Automovile);
    Object.values(newInstanceOfCar).forEach(prop => expect(prop).not.toEqual(undefined));
  });

  test('Random User fits in Model', () => {
    expect(newInstanceOfUser).toBeInstanceOf(User);
    Object.values(newInstanceOfUser).forEach(prop => expect(prop).not.toEqual(undefined));
  });

  test('Random Client fits in Model', () => {
    expect(newInstanceOfClient).toBeInstanceOf(User);
    Object.values(newInstanceOfClient).forEach(prop => expect(prop).not.toEqual(undefined));
  });
});
