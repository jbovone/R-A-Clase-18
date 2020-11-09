const data = require('faker');
const colors = ['orange', 'red', 'blue', 'white', 'green', 'black'];

export function generateClient(restricted = false) {
  const person = {
    id: random(1000),
    category: random(4),
    firstName: data.name.firstName(),
    lastName: data.name.lastName(),
    address: data.address.direction(),
    documentType: 'DNI',
    documentNumber: data.random.number({ max: 99999999 }),
    telephone: data.random.number({ max: 999999999 }),
    username: data.internet.userName(),
    password: data.internet.password(random(13), true),
    bornDate: data.date.past(70),
    email: data.internet.email(),
  };
  const { id, username, password, email } = person;
  return restricted ? { id, username, password, email } : person;
}

export function generateCar() {
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
export function random(range: number) {
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

//console.log(generateClient());
//console.log(generateCar());
//yarn gen

module.exports = { generateClient, generateCar };
