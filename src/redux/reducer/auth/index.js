import { SET_USER_DATA, SET_PLAYER_DATA } from "../../type"

const preState = {
    isAuth: false,
    user: {},
    player: {}
}

const auth = (state = preState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, user: action.data, isAuth: true }
        case SET_PLAYER_DATA:
            return { ...state, player: action.data }
        default:
            return state
    }
}

export default auth;