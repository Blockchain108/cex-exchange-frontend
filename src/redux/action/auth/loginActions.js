import { Root } from "@src/pre/config"
import { SET_USER_DATA, SET_PLAYER_DATA } from "../../type"

export const setToken = (token) => {
    localStorage.setItem(Root.token, token)
}

export const getToken = () => {
    return localStorage.getItem(Root.token)
}

export const checkToken = () => {
    let token = localStorage.getItem(Root.token)
    if(!token || token === "" || token === "null" || token === null) {
        return false
    } else {
        return true
    }
}

export const clearToken = () => {
    localStorage.clear()
}

export const loginAction = (user, player) => {
    return dispatch => {
        dispatch({ type: SET_PLAYER_DATA, data: player })
        dispatch({ type: SET_USER_DATA, data: user })
    }
}