import { createStore } from 'redux'
import rootReducer from '../reducers/reducer'
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key: ['author', 'task'],
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer)
let persistor = persistStore(store)
export { store, persistor}
