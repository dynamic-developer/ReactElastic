import {createStore, applyMiddleware, compose } from 'redux';

//middlewares 

import thunkMiddleware from 'redux-thunk'

//import custome componants

import reducers from '../Redux-reducer';

const store = createStore(reducers, compose(
    applyMiddleware(thunkMiddleware),
    //For working redux dav tool with chrome
    (window as any).devToolsExtension ? (window as any).devToolsExtension() : function (f) {
        return f;
    }
));

export default store;