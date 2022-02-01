import { createStore, combineReducers, applyMiddleware } from 'redux';
<<<<<<< HEAD
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rockets';
import missionsReducer from './missions/missions';

const reducer = combineReducers({
  rocketsReducer,
  missionsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
=======
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';

const rootReducer = combineReducers({
  missionsReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
>>>>>>> dev
