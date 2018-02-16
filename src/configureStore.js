import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'


const loggerMiddleware = createLogger({
    titleFormatter(action, time, took) {
        return action.type + " @ " + time + " (took " + took.toFixed(2) +"ms)";
    }
});


export default function configureStore(preLoadedState) {
    return createStore(
        rootReducer,
        preLoadedState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
}
