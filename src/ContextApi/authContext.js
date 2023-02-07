import { useReducer } from "react";


export default function AuthContext() {
    const initalToken = { token: localStorage.getItem("token") || "" }

    const ACTIONSKEYS = {
        ADD: 'addToken',
        REOMVE: 'removeToken',
    }

    function reducer(state, action) {
        let { type, payload } = action

        switch (type) {
            case ACTIONSKEYS.ADD:
                localStorage.setItem("token", payload)
                return { token: payload };

            case ACTIONSKEYS.REOMVE:
                localStorage.removeItem("token")
                return { token: "" };

            default:
                localStorage.removeItem("token")
                return { token: "" };

        }
    }

    const [state, dispatch] = useReducer(reducer, initalToken);

    const setToken = (userToken) => dispatch({ type: ACTIONSKEYS.ADD, payload: userToken })
    const resetToken = (userToken) => dispatch({ type: ACTIONSKEYS.REOMVE, payload: userToken })
    const checkToken = () => state.token

    return { setToken, resetToken, checkToken }
}

