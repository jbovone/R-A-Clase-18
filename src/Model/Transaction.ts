export interface transaction {
  id: string;
  salePrice: number;
  userId: string;
  carId: string;
  expires: string;
}
class Transaction {
  id: string;
  salePrice: number;
  userId: string;
  carId: string;
  expires: string;
  constructor(props: transaction) {
    this.id = props.id;
    this.salePrice = props.salePrice;
    this.userId = props.userId;
    this.carId = props.carId;
    this.expires = props.expires;
  }
}

export default Transaction;
