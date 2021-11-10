import Axios from "@src/pre/request"
import { toast } from "react-toastify"
import io from 'socket.io-client';
import { checkToken, getToken, clearToken, setToken, loginAction } from "./loginActions"
import { setNickModal } from "../base/index"
import { Root } from "@src/pre/config"
import { SET_PLAYER_DATA } from "../../type"

export const sessionCheck = async () => {
    if (checkToken()) {
        try {
            let rdata = await Axios("POST", {}, "admin/auth/sessionCheck")
            if (rdata && rdata.status) {
                return {
                    auth: {
                        isAuth: true,
                        user: rdata.data.user,
                        player: rdata.data.player
                    }
                }
            } else {
                clearToken()
                return { auth: { isAuth: false } }
            }
        } catch (e) {
            clearToken()
            return { auth: { isAuth: false } }
        }
    } else {
        return { auth: { isAuth: false } }
    }
}

export const socketInit = () => {
    return async (dispatch, getState) => {
        let token = getToken()
        Root.socket = io(Root.adminUrl, { query: { token } });

        Root.socket.on("balance", (data) => {
        	let thisPlayer = getState().auth.player;
        	for (let i = 0; i < data.data.length; i++) {
                if (thisPlayer._id === data.data[i]._id) {
                    thisPlayer = Object.assign({}, thisPlayer, { balance: data.data[i].balance, bonusbalance: data.data[i].bonusbalance })
                    dispatch({ type: SET_PLAYER_DATA, data: thisPlayer })
        		}
        	}
        });
    }
}

export const userRegister = (data) => {
    return async dispatch => {
        let rdata = await Axios("POST", data, "admin/auth/userRegister")
        if (rdata.status) {
            toast.success("Success")
            let { token } = rdata
            // dispatch(loginAction(user, player))
            // dispatch(setAuthModal({ login: false, register: false }))
            setToken(token)
            window.location.assign("/")
        } else {
            toast.error(rdata.data)
        }
    }
}

export const playerProfileUpdate = (data) => {
    return async dispatch => {
        let rdata = await Axios("POST", data, "admin/user/updateProfile")
        if (rdata.status) {            
            await dispatch(userUpdate())
            toast.success("Success")
        } else {
            toast.error(rdata.data)
        }
    }
}

export const userUpdate = () => {
    return async dispatch => {
        let authData = await sessionCheck();
        dispatch(loginAction(authData.auth.user, authData.auth.player))
    }
}

export const userLogin = (data) => {
    return async dispatch => {
        let rdata = await Axios("POST", data, "admin/auth/userLogin")
        if (rdata.status) {
            toast.success("Success")
            let { token } = rdata
            // dispatch(loginAction(user, player))
            // dispatch(setAuthModal({ login: false, register: false }))
            setToken(token)
            window.location.assign("/")
        } else {
            toast.error(rdata.data)
        }
    }
}

export const changepassword = (data) => {
    return async (dispatch) => {
        let rdata = await Axios("POST", data, "admin/user/changepassword")
        if (rdata.status) {
            toast.success("success");
        } else {
            toast.error(rdata.data);
        }
    }
}

export const updateKycData = (data) => {
    return async dispatch => {
        let rdata = await Axios("POST", data, "admin/user/uploadKYC")
        if (rdata.status) {
            await dispatch(userUpdate())
            toast.success("Success")
        }
    }
}

export const updateNickName = (data) => {
    return async dispatch => {
        let rdata = await Axios("POST", data, "admin/auth/updatenickname")
        if (rdata.status) {
            toast.success("successfully saved nickname");
            await dispatch(userUpdate());
            dispatch(setNickModal(false));
        } else {
            toast.error(rdata.data);
        }
    }
}

export const logout = async () => {
    await Axios("POST", {}, "admin/auth/logout")
    clearToken()
    window.location.assign("/")
}