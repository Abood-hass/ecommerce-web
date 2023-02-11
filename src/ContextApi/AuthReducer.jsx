import { createContext, useReducer } from "react";


export const AuthCont = createContext()

export default function AuthContext(props) {
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

    return <AuthCont.Provider value={{ setToken, resetToken, checkToken }}>
        {props.children}
    </AuthCont.Provider >


}

