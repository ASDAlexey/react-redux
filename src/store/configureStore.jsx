import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    const logger = createLogger();
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk, logger));

    if (module.hot) {
        module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers')));
    }
    return store;
}
