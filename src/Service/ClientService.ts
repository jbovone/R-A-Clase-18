import { clientsService } from '../../types';

class ClientService implements clientsService {
  constructor() {}

  getAll(_: any, dispatch: any) {}

  getById(event: any, dispatch: any) {
    const { id } = event.params;
  }

  getByfilters(event: any, dispatch: any) {
    const { filter } = event.params;
  }

  create(event: any, dispatch: any) {
    const user = event.body;
  }

  remove(event: any, dispatch: any) {
    const { id } = event.params;
    console.log('aca estamos', id);
    dispatch.send('OK!');
    return 'erased' + id;
  }

  emailVerify(event: any, dispatch: any) {
    const { id } = event.params;
  }

  completeRegistration(event: any, dispatch: any) {}

  login(event: any, dispatch: any) {
    console.log(event.body);
  }
}

export default ClientService;
