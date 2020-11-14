import { bookingsService, ID } from '../../types';
import { category, booking, bookingsRepository } from '../../types';
import * as userTypes from '../Invariances/userCategories';
import AccessDenied from '../Exeptions/AccessDenied';

class BookingsService implements bookingsService {
  bookingsRepository: bookingsRepository;
  constructor(bookingsRepository: bookingsRepository) {
    this.bookingsRepository = bookingsRepository;
  }

  async create(booking: booking, category: category) {
    const { USERS_ACCESS } = userTypes;
    if (category !== USERS_ACCESS) {
      throw new AccessDenied('Forbidden');
    }
    try {
      const newBooking = await this.bookingsRepository.create(booking);
      return newBooking;
    } catch (error) {
      throw new Error('Client Service Unhandled');
    }
  }

  async getAll(category: category) {
    const { MANAGEMENT_ACCESS } = userTypes;
    if (category < MANAGEMENT_ACCESS) {
      throw new AccessDenied('Forbidden');
    }
    try {
      const transactions = await this.bookingsRepository.getAll();
      return transactions;
    } catch (error) {
      throw new Error('Bookings Service Unhandled');
    }
  }

  async getById(id: ID, category: category) {
    const { MANAGEMENT_ACCESS } = userTypes;
    if (category < MANAGEMENT_ACCESS) {
      throw new AccessDenied('Forbidden');
    }
    try {
      const booking = await this.bookingsRepository.getById(id);
      return booking;
    } catch (error) {
      throw new Error('Bookings Service Unhandled');
    }
  }

  async getByfilters(category: category, search: string) {
    const { MANAGEMENT_ACCESS } = userTypes;
    if (category < MANAGEMENT_ACCESS) {
      throw new AccessDenied('Forbidden');
    }
    try {
      const bookings = await this.bookingsRepository.getByfilters(search);
      return bookings;
    } catch (error) {
      throw new Error('Bookings Service Unhandled');
    }
  }

  async remove(id: ID, category: category) {
    const { ADMINISTRATIVE_ACCESS } = userTypes;
    if (category < ADMINISTRATIVE_ACCESS) {
      throw new AccessDenied('Forbidden');
    }
    try {
      const booking = await this.bookingsRepository.remove(id);
      return booking;
    } catch (error) {
      throw new Error('Bookings Service Unhandled');
    }
  }
  update() {}
  // extendContract() {} TODO
}

export default BookingsService;
