import User from './User'

/**
 *  Person. Client consumer.
 */

class Client extends User {
  name: string;
  surmane: string;
  documentType: string;
  documentNumber: string;
  address: string;
  telephone: number;
  birthday: string;
  isAdmin: boolean;

  constructor(  
    name: string,
    surmane: string,
    documentType: string,
    documentNumber: string,
    address: string,
    telephone: number,
    birthday: string,
    isAdmin: boolean,
    username: string,
    password: string,
    email: string,
    ){
    super(username, password, email)   
    this.name = name;
    this.surmane = surmane;
    this.documentType = documentType;
    this.documentNumber = documentNumber;
    this.address = address;
    this.telephone = telephone;
    this.birthday = birthday;
    this.isAdmin = isAdmin;
  }
}

export default Client
