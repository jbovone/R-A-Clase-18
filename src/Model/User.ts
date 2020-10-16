/**
 * Person consumer with minimal registration functionality.
 * This user status may change over conditions to be meet:
 *  -A extended registration.
 *  -Mail verification.
 */

export default class User {
  username: string;
  password: string;
  email: string;
  constructor(username: string, password: string, email: string) {
    this.username = username;
    this.password = password;
    this.email = email;
  }
}
