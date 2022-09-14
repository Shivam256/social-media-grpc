import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import auth from "./slices/auth";
import user from "./slices/user";

const authPersistConfig = {
  key: "auth",
  storage,
  keyPrefix: "redux-",
  blacklist: ["isLoggenIn"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, auth),
  user,
});

export default rootReducer;
