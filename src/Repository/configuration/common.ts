import DIContainer, { factory } from 'rsdi';
import MainDB from './main_db.config';
import SessionDB from './session_db.config';

function addDatabaseDefinitions(container: DIContainer) {
  container.addDefinitions({
    MainDB: factory(MainDB),
    SessionDB: factory(SessionDB),
  });
}

export default addDatabaseDefinitions;
