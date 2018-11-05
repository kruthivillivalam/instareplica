import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import signupreducer from './reducers/signupreducer'

const store = createStore(signupreducer,applyMiddleware(logger));

export default store;