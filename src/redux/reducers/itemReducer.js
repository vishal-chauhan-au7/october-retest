import {v4 as uuid} from "uuid"
import { ADD_ITEMS } from "../actions/addItems"

const itemState = {
    items : [
        { id: uuid(), content: "First task" },
        { id: uuid(), content: "Second task" },
        { id: uuid(), content: "Third task" },
      ],
    
    //   Thecolumns : {
    //     [uuid()]: {
    //       name: "Todo",
    //       items: items,
    //     },
    //     [uuid()]: {
    //       name: "In progress",
    //       items: [],
    //     },
    //     [uuid()]: {
    //       name: "Completed",
    //       items: []
    //     }
    //   }
}

const itemReducer = (state = itemState, action) => {
    switch (action.type) {
        case ADD_ITEMS:
            
            return {...state, items: [...state.items, {id: uuid(), content: action.payload}]}
    
        default:
            return state
    }
};

export default itemReducer
