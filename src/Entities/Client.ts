import User, { user } from './User';

export interface client {
  id: string;
  firstName: string;
  lastName: string;
  documentType: string;
  documentNumber: string;
  address: string;
  telephone: number;
  bornDate: string;
  isAdmin: boolean;
  username: string;
  password: string;
  email: string;
}

/**
 *  Client.
 */

class Client extends User {
  firstName: string;
  lastName: string;
  documentType: string;
  documentNumber: string;
  address: string;
  telephone: number;
  bornDate: string;
  isAdmin: boolean;

  constructor(props: client) {
    super(props);
    this.firstName = props.firstName;
    this.lastName = props.lastName;
    this.documentType = props.documentType;
    this.documentNumber = props.documentNumber;
    this.address = props.address;
    this.telephone = props.telephone;
    this.bornDate = props.bornDate;
    this.isAdmin = props.isAdmin;
  }
}

export default Client;
