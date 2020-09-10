import axios from '../../axios/axios-testing'
import { FETCH_TESTINGES_START, FETCH_TESTINGES_SUCCESS, FETCH_TESTINGES_ERROR } from './actionType'

export function fetchTestinges() {
    return async dispatch => {
        dispatch(fetchTestingesStart)
        try {
            const response = await axios.get('/testinges.json')
            const testinges = []
            Object.keys(response.data).forEach((key, index) => {
                testinges.push({
                    id: key,
                    name: `Тест №${index + 1}`
                })
            })
            dispatch(fetchTestingesSuccess(testinges))
        } catch (e) {
            dispatch(fetchTestingesError(e))
        }
    }
}

export function fetchTestingesStart() {
    return {
        type: FETCH_TESTINGES_START
    }
}

export function fetchTestingesSuccess(testinges) {
    return {
        type: FETCH_TESTINGES_SUCCESS,
        testinges
    }
}

export function fetchTestingesError(e) {
    return {
        type: FETCH_TESTINGES_ERROR
    }
}