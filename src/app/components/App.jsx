import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import fetchConfig from "../actions/fetchConfigAction";

const App = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchConfig());
    }, []);

    return (
        <div>
            <h1>Webpack React Base</h1>
            { props.config.isLoading ? (
                <p>Loading config...</p>
            ) : (
                <p>{JSON.stringify(props.config.data)}</p>
            )}
        </div>
    )
};

const mapStateToProps = state => ({
    config: state.config
});

export default connect(mapStateToProps)(App);