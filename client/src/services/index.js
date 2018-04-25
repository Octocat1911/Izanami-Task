import Config from '../config';
import FetchApi from './FetchApi';

const taskService = new FetchApi(Config.api, '/task');
const userService = new FetchApi(Config.api, '/user');

export default {
  taskService,
  userService,
};
