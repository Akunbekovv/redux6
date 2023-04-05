import {types} from "./types";

export function addInput(event){
    return {
        type: types.ADD,
        payload: event
    }
}


export function clearInput () {
    return {
        type: types.CLEAR
    }
}
