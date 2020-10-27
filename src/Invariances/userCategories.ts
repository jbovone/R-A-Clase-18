import { category } from '../../types';

/**visitors unlogger users */
export const NO_ACCESS = 0;

/**user control panel access */
export const USERS_ACCESS: category = 1;

/**clients able to rent */
export const RENTAL_ACCESS: category = 2;

/**access data add cars, remove cars from service */
export const MANAGEMENT_ACCESS: category = 3;

/**managers assignment */
export const ADMINISTRATIVE_ACCESS: category = 4;
