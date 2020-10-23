import { transaction } from '../Entities/Transaction';
import TransactionsModel from './model/TransactionsModel';

export default class ClientsRepository {
  interface;
  constructor(transactions: typeof TransactionsModel) {
    this.interface = transactions;
  }

  async getAll() {
    const transactions = await this.interface.findAll();
    return transactions;
  }

  async getById(id: string) {
    const transaction = await this.interface.findOne({
      where: { id },
    });

    return transaction;
  }

  async getByfilters(filters: string) {
    const transaction = await this.interface.findAll({
      where: {
        id: filters,
        name: filters,
      },
    });
    return transaction;
  }

  async create(transaction: transaction) {
    let newTransaction;
    const buildOptions = { isNewRecord: !transaction.id, include: this.interface };
    newTransaction = this.interface.build(newTransaction, buildOptions);
    try {
      newTransaction = await newTransaction.save();
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async remove(id: string) {
    if (!id) {
      throw new Error('undefined automobile');
    }
    return Boolean(await this.interface.destroy({ where: { id: id } }));
  }
}
