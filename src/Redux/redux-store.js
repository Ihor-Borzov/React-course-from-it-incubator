import { combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import UsersReducer from "./users-reducer";






let reducers = combineReducers({          /* Store needs reducers, because all the logic to change the store in reducers, here we just add our reducers to an object in a store*/
    profilePage : profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage:UsersReducer,
    auth:authReducer,                 /* we do not specify page, because this is not a page - this is logic  */
});


let store = createStore(reducers);       /* to create new store, also all reducers give to store  */



window.store = store   /* in the object window we created a new variable and named it store, also this variable we assigned to our store
now we can get our store whenever we are */


export default store;