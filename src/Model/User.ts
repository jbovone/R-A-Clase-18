export interface user {
  id: string;
  username: string;
  password: string;
  email: string;
}
class User {
  id: string;
  username: string;
  password: string;
  email: string;
  constructor(props: user) {
    this.id = props.id;
    this.username = props.username;
    this.password = props.password;
    this.email = props.email;
  }
}

export default User;
