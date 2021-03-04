const requestpopulation = 'REQUEST_POPULATION';
const receivepopulation = 'RECEIVE_POPULATION';
const initialState = {ageStart: 18, ageEnd: 35, isLoading: false, 
    ownGender: 'female', desiredGender: ['female', 'male'],
    matches: '???'};

export const actionCreators = {
    requestBefolkning: (props) => async (dispatch, getState) => {

        console.log(getState().befolkning)
        console.log(props)
        
        let state = props
        
        let ageRange = AgeRange(state)
        let desiredGender = Gender(state.desiredGender)
        let municipality = Municipality(state)
        
        dispatch({ type: requestpopulation });

        const url = `https://api.statbank.dk/v1/data`;
        const response = await fetch(url, {
            method: 'POST',
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
                "   \"valuePresentation\": \"Value\",\n" +
                "   \"variables\": [\n" +
                "      {\n" +
                "         \"code\": \"OMRÅDE\",\n" +
                "         \"values\": [\n" +
                "            \"" + municipality +"\"\n" + /* Municipality codes - comma separated*/
                "         ]\n" +
                "      },\n" +
                "      {\n" +
                "         \"code\": \"ALDER\",\n" +
                "         \"values\": [\n" +
                "            \"sum("+ ageRange + ")\"\n" + /* Sum of selected ages*/
                "         ]\n" +
                "      },\n" +
                "      {\n" +
                "         \"code\": \"Tid\",\n" +
                "         \"values\": [\n" +
                "            \"(1)\"\n" +
                "         ]\n" +
                "      },\n" +
                "      {\n" +
                "         \"code\": \"KØN\",\n" +
                "         \"values\": [\n" +
                "            \"sum(" + desiredGender + ")\"\n" + /* 1 = male, 2 = female, sum(1,2) = both */
                "         ]\n" +
                "      }\n" +
                "   ]\n" +
                "}"
        });
        const data = await response.json();
        console.log(data)

        dispatch({ type: receivepopulation, matches: data.dataset.value });
    }
};

function AgeRange(state) {
    return [...new Array(state.ageEnd - state.ageStart).keys()].map(i => i + state.ageStart).join(',')
}
function Gender(desiredGender){
    let gender = ''
    let female = desiredGender.includes('female')
    let male = desiredGender.includes('male')
    if (male) gender = '1'
    if (female) gender = '2'
    if (male && female) gender = '1,2'
    return gender
}

function Municipality(state) {
    return 253
}

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
            matches: action.matches,
            isLoading: false
        };
    }

    return state;
};
