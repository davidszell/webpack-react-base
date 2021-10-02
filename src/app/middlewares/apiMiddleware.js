import { API, API_START, API_SUCCESS, API_ERROR } from 'actions/types';
import axios from 'axios';

const apiMiddleware = ({dispatch}) => next => action => {
    if (action.type !== API) {
        return next(action);
    }

    const {
        url,
        method,
        data,
        label
    } = action.payload;

    const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";

    if (label) {
        dispatch({
            type: API_START,
            payload: {
                label
            }
        })
    }

    axios.request({
        url,
        method,
        [dataOrParams]: data
    })
    .then(({data}) => dispatch({
        type: API_SUCCESS,
        payload: {
            label,
            data
        }
    }))
    .catch(error => dispatch({
        type: API_ERROR,
        payload: {
            label,
            error
        }
    }))
}

export default apiMiddleware;