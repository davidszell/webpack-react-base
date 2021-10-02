import { FETCH_CONFIG, API_START, API_SUCCESS, API_ERROR } from "actions/types";

const configReducer = (state = {}, action) => {
    switch (action.type) {
        case API_START:
            if (action.payload.label === FETCH_CONFIG) {
                return {
                    ...state,
                    isLoading: true
                }
            }
            break;
        case API_SUCCESS:
            if (action.payload.label === FETCH_CONFIG) {
                return {
                    data: action.payload.data,
                    isLoading: false
                }
            }
            break;
        case API_ERROR:
            if (action.payload.label === FETCH_CONFIG) {
                return {
                    ...state,
                    error: action.payload.error,                            
                    isLoading: false
                }
            }
            break;
        default:
            return state;
    }

    return state;
};

export default configReducer;