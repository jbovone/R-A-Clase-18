/**
 *  Person. Client consumer.
 */

interface Client extends User {
  name: string;
  surmane: string;
  documentType: string;
  documentNumber: string;
  address: string;
  telephone: number;
  email: string;
  birthday: string;
  isAdmin: boolean;
}
