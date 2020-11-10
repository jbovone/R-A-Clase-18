import DIContainer from 'rsdi';
import { generateCar, generateUser, generateClient, random } from './mockups.gen';
import { automobileService, clientsService } from '../types.d';

export async function populateDatabase(container: DIContainer) {
  const automobileService = container.get('AutomobileService') as automobileService;
  const isCarDBEmpty = (await automobileService.getAll()).length === 0;

  const clientsService = container.get('ClientsService') as clientsService;
  const isClientsDBEmpty = (await clientsService.getAll(4)).length < 2;
  if (isCarDBEmpty) fillWithCars();
  if (isClientsDBEmpty) fillWithUsers();

  async function fillWithCars() {
    let counter = 0;
    while (random(40, 10) > counter) {
      const car = generateCar();
      try {
        await automobileService.create(car);
      } catch (error) {
        console.error(error);
      }
      counter++;
    }
  }

  async function fillWithUsers() {
    let counter = 0;
    while (random(40, 15) > counter) {
      const user = generateUser();
      let registredClient;
      try {
        registredClient = await clientsService.create(user);
      } catch (error) {
        console.error(error);
        return new Error('Unhandled at DB generate data');
      }
      counter++;
    }
  }
}
