import Config from '../config';
import FetchApi from './FetchApi';

const taskService = new FetchApi(Config.api, '/tasks');

export default {
  taskService,
};
