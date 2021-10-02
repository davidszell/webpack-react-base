import { createStore } from 'redux';

import reducers from 'app/reducers';
import middlewares from 'app/middlewares';

const store = createStore(reducers, middlewares);

export default store;