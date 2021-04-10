export function numberAdd2(dispatch) {
    dispatch({ type: 'numberAdd2' });
}

export function multiplyFor7(dispatch) {
    dispatch({type: 'multiplyFor7'})
}

export function divideBy25(dispatch) {
    dispatch({type: 'divideBy25'})
}

export function parseToInt(dispatch) {
    dispatch({type: 'parseToInt'})
}


export function add10(dispatch) {
    dispatch({type: 'addAnyNumber', payload: + 10})
}

export function sub15(dispatch) {
    dispatch({type: 'addAnyNumber', payload: - 15})
}
