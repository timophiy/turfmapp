import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';


export default createStore(
    applyMiddleware(thunk)
);
