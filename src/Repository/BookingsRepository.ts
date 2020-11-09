import { booking } from '../../types';
import BookingsModel from './model/BookingsModel';

export default class BookingsRepository {
  interface;
  constructor(model: typeof BookingsModel) {
    this.interface = model;
  }

  async getAll() {
    const bookings = await this.interface.findAll();
    return bookings;
  }

  async getById(id: string) {
    const booking = await this.interface.findOne({
      where: { id },
    });

    return booking;
  }

  async getByfilters(filters: string) {
    const bookings = await this.interface.findAll({
      where: {
        id: filters,
        name: filters,
      },
    });
    return bookings;
  }

  async create(booking: booking) {
    let newBooking;
    const buildOptions = { isNewRecord: !booking.id, include: this.interface };
    newBooking = this.interface.build(newBooking, buildOptions);
    try {
      newBooking = await newBooking.save();
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async remove(id: string) {
    return Boolean(await this.interface.destroy({ where: { id: id } }));
  }
}
