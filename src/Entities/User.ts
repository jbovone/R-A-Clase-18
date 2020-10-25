import { user } from "../../types";

class User {
  username: string;
  password: string;
  email: string;
  constructor(props: user) {
    this.username = props.username;
    this.password = props.password;
    this.email = props.email;
  }
}

export default User;
