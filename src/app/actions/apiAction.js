import { API } from './types';

const apiAction = ({
    url = '',
    method = 'GET',
    data = {},
    label = ''
}) => {
    return {
        type: API,
        payload: {
            url,
            method,
            data,
            label
        }
    }
}

export default apiAction;