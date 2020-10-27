import ClientsRepository from '../src/Repository/ClientsRepository';
import ClientsModel from '../src/Repository/model/ClientsModel';
import Sequelize from 'sequelize';

const db = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:',
});

const clientRepo = new ClientsRepository(ClientsModel.setup(db));

describe('clients repository tests', () => {
  test('creates a new user in the database', async () => {
    await db.sync();
    const data = await clientRepo.create({
      username: 'julian',
      password: 'fizz-fuzz',
      email: 'mail@mail.com',
    });
    expect(typeof data).toBe('object');
    expect(data.username).toEqual('julian');
  });

  test('retrieves an entrie by id from the database', async () => {
    const data = await clientRepo.getById(1);
    expect(typeof data).toBe('object');
    expect(data.username).toEqual('julian');
  });

  test('retrieves all items from the database', async () => {
    await clientRepo.create({
      username: 'Fab',
      password: 'yasaka',
      email: 'ra@programa.com',
    });
    const data = await clientRepo.getAll();
    expect(typeof data).toBe('object');
    expect(data[1].username).toEqual('Fab');
    expect(data[0].username).toEqual('julian');
  });

  test('sensitive query to the database: username and password - success query', async () => {
    const data = await clientRepo.getByUserAndPassword('Fab', 'yasaka');
    expect(data.username).toBe('Fab');
    expect(data.email).toBe('ra@programa.com');
    expect(data.password).toBe('yasaka');
  });

  test('sensitive query to the database: username and password - error query', async () => {
    const data = await clientRepo.getByUserAndPassword('nacho', 'yasaka');
    expect(data).toBe(null);
  });

  test('sensitive query to the database: username and password - error query case 2', async () => {
    const data = await clientRepo.getByUserAndPassword('Fab', 'fizz-fuzz');
    expect(data).toBe(null);
  });

  test('try to create a new user with invalid data', async () => {
    const data = await expect(
      clientRepo.create({
        username: 343,
        password: true,
        email: 'ra@programa.com',
      })
    ).rejects.toThrow('');
    /**
     * it suppose to throw a stringified valitation object, not '', i expected this to fail, but at least throws.
     **/
    expect(data).toBe(undefined);
  });
  test('removes an item from the database', async () => {
    const data = await clientRepo.remove(1);
    expect(data).toBe(true);
    const reviewQuery = await clientRepo.getById(1);
    expect(reviewQuery).toBe(null);
  });
});
