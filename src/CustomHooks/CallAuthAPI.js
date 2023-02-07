export const CallsType = {
    LOGIN: "/login",
    REGISTER: "/signup",
}
export const CallAuthAPI = async (body, callTpye = CallsType.LOGIN) => {

    try {

        let url = process.env.REACT_APP_NOT_SECRET_CODE + callTpye
        const respone = await fetch(url,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })
            .then(async (res) => res.json())
            .then(async ({ token, message }) => { return { error: message, userToken: token } });

        return respone

    } catch (error) {
        return error

    }
}
