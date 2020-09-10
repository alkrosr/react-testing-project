import { FETCH_TESTINGES_ERROR, FETCH_TESTINGES_START, FETCH_TESTINGES_SUCCESS } from "../actions/actionType"

const initialState = {
    testinges: [],
    loading: false,
    error: null
}

export default function testingReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TESTINGES_START:
            return {
                ...state, loading: true
            }
        case FETCH_TESTINGES_SUCCESS:
            return {
                ...state, loading: false, testinges: action.testinges
            }
        case FETCH_TESTINGES_ERROR:
            return {
                ...state, loading: false,  error: action.error
            }
        default:
            return state
    }
}