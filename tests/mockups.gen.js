const data = require('faker');
const colors = ['orange', 'red', 'blue', 'white', 'green', 'black'];
function setRandomMailProvider() {
  const providers = ['gmail.com', 'outlook.com', 'hotmail.com', 'yahoo.es'];
  const draft = Math.floor(Math.random() * Math.floor(providers.length));
  return providers[draft];
}

function generatePerson(restricted = false) {
  const person = {
    id: data.random.uuid(),
    firstName: data.name.firstName(),
    lastName: data.name.lastName(),
    address: data.address.direction(),
    documentType: 'DNI',
    documentNumber: data.random.number({ max: 99999999 }),
    telephone: data.random.number({ max: 999999999 }),
    isAdmin: false,
    username: data.internet.userName(),
    password: data.internet.password(random(13), true),
    email: data.name.firstName() + '@' + setRandomMailProvider(),
  };
  const { username, password, email } = person;
  return restricted ? { username, password, email } : person;
}

function generateCar() {
  const car = {
    id: data.vehicle.vin(),
    model: data.vehicle.model(),
    brand: data.vehicle.manufacturer(),
    year: data.date.past(15),
    miles: data.random.number({ max: 170000 }),
    color: colors[random(colors.length)],
    passengers: setPassengers(),
    gears: setGears(),
    status: setStatus(),
  };
  return car;
}
function random(range) {
  return Math.floor(Math.random() * range);
}
function isDraft(factor = 0.5) {
  return Math.random() > factor;
}
function setPassengers() {
  return isDraft() ? 4 : 2;
}
function setGears() {
  return isDraft(0.3) ? 'auto' : 'manual';
}
function setStatus() {
  return isDraft(0.2) ? 'in-repairs' : isDraft() ? 'avaliable' : 'in-service';
}

console.log(generatePerson());
console.log(generateCar());

module.exports = { generatePerson, generateCar };
