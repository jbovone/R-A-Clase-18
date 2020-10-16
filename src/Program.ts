import DIContainer, { object, get, factory } from 'rsdi';
import ApiService from './Services/ApiService';
import ServerProvider from './Services/Providers/ServerProvider';
import AutomovilleController from './Controller/AutomovileController';
import Automovile from './Model/Automovile';
import * as v1 from 'uuid';

const program = new DIContainer();

program.addDefinitions({
  AutomovilleController: object(AutomovilleController).construct(
    get('ApiService'),
    get('ServerProvider')
  ),
});

export default program;
