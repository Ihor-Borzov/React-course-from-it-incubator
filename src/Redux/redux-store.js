import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";






let reducers = combineReducers({          /* Store needs reducers, because all the logic to change the store in reducers, here we just add our reducers to an object in a store*/
    profilePage : profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer
});


let store = createStore(reducers);       /* to create new store, also all reducers give to store  */






export default store;