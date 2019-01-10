import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer/reducer';

// make redux available through dev tools
declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;

const configureStore = () => {
    return createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;
