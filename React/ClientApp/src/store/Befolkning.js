const requestpopulation = 'REQUEST_POPULATION';
const receivepopulation = 'RECEIVE_POPULATION';
const initialState = { befolkning: [], isLoSading: false };

export const actionCreators = {
    requestBefolkning: () => async (dispatch, getState) => {

        dispatch({ type: requestpopulation });

        const url = `https://api.statbank.dk/v1/data`;
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: "{\n" +
                "   \"table\": \"FOLK1A\",\n" +
                "   \"format\": \"JSONSTAT\",\n" +
                "   \"variables\": [\n" +
                "      {\n" +
                "         \"code\": \"Tid\",\n" +
                "         \"values\": [\n" +
                "            \"*\"\n" +
                "         ]\n" +
                "      }\n" +
                "   ]\n" +
                "}"
        });
        const data = await response.json();
        console.log(data)

        dispatch({ type: receivepopulation, befolkning: [data.dataset.label, data.dataset.source, data.dataset.updated, data.dataset.value] });
    }
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestpopulation) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receivepopulation) {
        return {
            ...state,
            befolkning: action.befolkning,
            isLoading: false
        };
    }

    return state;
};
