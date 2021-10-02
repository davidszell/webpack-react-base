import { applyMiddleware } from 'redux';

import apiMiddleware from './apiMiddleware';
import loggerMiddleware from './loggerMiddleware';

const middlewares = [
    apiMiddleware
];

if (process.env.NODE_ENV !== 'production') {
    middlewares.push(loggerMiddleware);
}

export default applyMiddleware(...middlewares);