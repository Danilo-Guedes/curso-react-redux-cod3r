export function login(dispatch) {
    dispatch({type: 'login', payload: 'Danilo o mestre'})
}

export function logout(dispatch) {
    dispatch({type: 'logout'})
}
