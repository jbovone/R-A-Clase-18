import { transactionsService } from '../Model/types';

class TransactionsService implements transactionsService {
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

  update(event: any, dispatch: any) {
    const client = event.body;
    const { id } = event.params;
  }

  remove(event: any, dispatch: any) {
    const { id } = event.params;
    console.log('aca estamos', id);
    dispatch.send('OK!');
    return 'erased' + id;
  }
  extendContract(event: any, dispatch: any) {}
}

export default TransactionsService;
