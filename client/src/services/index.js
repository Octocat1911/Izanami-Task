import Config from '../config';
import FetchApi from './FetchApi';

const taskService = new FetchApi(Config.api, '/task');

export default {
  taskService,
};
