import apiAction from "./apiAction";
import { FETCH_CONFIG } from "./types";

const fetchConfig = () => {
    return apiAction({
        url: '/api/config',
        label: FETCH_CONFIG
    })
};

export default fetchConfig;