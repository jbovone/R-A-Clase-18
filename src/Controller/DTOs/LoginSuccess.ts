import { category, user } from '../../../types';

class LoginData {
  username: string;
  id: number;
  category: category;
  constructor(props: user) {
    this.username = props.username;
    this.id = props.id!;
    this.category = props.category;
  }
}

export default LoginData;
