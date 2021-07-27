import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./rootReducer";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export default persistor;
