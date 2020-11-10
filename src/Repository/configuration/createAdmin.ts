import DIContainer from 'rsdi';
import { clientsService } from '../../../types';
import UndefinedUser from '../../Exeptions/UndefinedUser';
import { ADMINISTRATIVE_ACCESS } from '../../Invariances/userCategories';

async function createAdmin(container: DIContainer) {
  const ADMIN_USERNAME = process.env.ADMIN_USERNAME as string;
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD as string;
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL as string;

  const cientsRepository = container.get('ClientsRepository') as clientsService;
  const clientsService = container.get('ClientsService') as clientsService;
  let isAdminCreated;

  try {
    isAdminCreated = await clientsService.authorization(ADMIN_USERNAME, ADMIN_PASSWORD);
  } catch (error) {
    isAdminCreated = error;
  }

  const ADMIN = {
    username: ADMIN_USERNAME,
    password: ADMIN_PASSWORD,
    email: ADMIN_EMAIL,
    category: ADMINISTRATIVE_ACCESS,
  };

  if ((isAdminCreated as any) instanceof UndefinedUser) {
    const newAdmin = await cientsRepository.create(ADMIN);
    console.log(newAdmin);
  } else if (isAdminCreated) {
    return;
  } else {
    throw new Error('Unhandled at Create Admin');
  }
}

export default createAdmin;
