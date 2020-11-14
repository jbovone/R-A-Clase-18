import { userValidation, userConstraints } from '../../types';

class UserConstraints {
  username;
  email;
  constructor(props: userConstraints) {
    this.username = props.username;
    this.email = props.email;
  }
  static format(validation: userValidation) {
    const fields: userConstraints = {};
    validation.forEach(field => {
      if (field) {
        fields[field] = `This ${field} is aready in use`;
      }
    });
    return fields;
  }
}

export default UserConstraints;
