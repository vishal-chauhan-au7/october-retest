export const ADD_ITEMS = "ADD_ITEMS"

export const addItems = (item) => dispatch =>  {
    dispatch({
        type: ADD_ITEMS,
        payload: item
    })
}