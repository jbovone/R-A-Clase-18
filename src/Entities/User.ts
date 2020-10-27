import { category, user } from "../../types";

class User {
  id?: number;
  username: string;
  password: string;
  email: string;
  category: category;
  constructor(props: user) {
    this.id = props.id;
    this.username = props.username;
    this.password = props.password;
    this.email = props.email;
    this.category = props.category;
  }
}

export default User;
