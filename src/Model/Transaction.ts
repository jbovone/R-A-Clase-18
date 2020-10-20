export interface transaction {
  id: string;
  userId: string;
  carId: string;
  expires: string;
  fromTime: string;
  toTime: string;
  paid: number;
  totalPrice: number;
  alive: boolean;
}
class Transaction {
  id: string;
  userId: string;
  carId: string;
  fromTime: string;
  toTime: string;
  paid: number;
  totalPrice: number;
  alive: boolean;
  constructor(props: transaction) {
    this.id = props.id;
    this.userId = props.userId;
    this.carId = props.carId;
    this.fromTime  = props.fromTime;
    this.toTime = props.toTime;
    this.paid = props.paid;
    this.totalPrice = props.totalPrice;
    this.alive = props.alive;
  } 
}

export default Transaction;
