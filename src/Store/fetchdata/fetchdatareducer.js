
const initial = {
    data: [],
    totalpages:10,
    currentpage:1,
    error: false,
    loading: false,
    sort:"",
    limit:10
}

export function fetchdataReducer(state = initial, { type, payload }) {
    switch (type) {
        case "SetData": {
            return { ...state, data: payload , loading: false, error: false }
        }
        case "SetUsersDetailsData": {
            return { ...state, data: payload.data,limit:payload.limit,totalpages:payload.totalpages,currentpage:payload.page , loading: false, error: false }
        }
        case "Deleteuser": {
            return { ...state, data: [] }
        }
        case "LOADING": {
            return { ...state, loading: true }
        }
        case "setsort": {
            return { ...state,sort:payload.sortinfo, error: true }
        }
        case "Limit":{
            return { ...state,limit:payload.limit, error: true }
   
        }
        default: {
            return state;
        }
    }
}