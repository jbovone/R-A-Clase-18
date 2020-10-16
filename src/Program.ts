import DIContainer, { object, get, factory } from 'rsdi';

import * as v1 from 'uuid';

const program = new DIContainer();

program.addDefinitions({
  IEntity: object(v1).construct(get('uuid_generator')),
});

export default program;
