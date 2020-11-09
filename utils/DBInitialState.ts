import DIContainer from 'rsdi';
import * as gen from './mockups.gen';
import { automobileService } from '../types.d';

export async function setDBinitialState(container: DIContainer) {
  const AutomobileService = container.get('AutomobileService') as automobileService;
  const cars = await AutomobileService.getAll();
  if (cars.length === 0) {
    let counter = 0;
    while (30 > counter) {
      await AutomobileService.create(gen.generateCar());
    }
    const cars = await AutomobileService.getAll();
    console.log(cars);
  }
}
