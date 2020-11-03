import { userValidation } from '../../types';

class UserConstraints {
  static format(validation: userValidation) {
    const fields: any = {};
    validation.forEach(field => {
      if (field) {
        fields[field] = `This ${field} is aready in use`;
      }
    });
    return fields;
  }
}

export default UserConstraints;
