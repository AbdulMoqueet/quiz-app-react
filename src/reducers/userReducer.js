const initialState = { username: '', score: 0 };

const user = (state = initialState, action) => {

    switch (action.type) {

        case "SET_USERNAME":
            return { ...state, username: action.payload }

        case "SET_SCORE":

            localStorage.setItem("quizApp_react", JSON.stringify({
                username: state.username,
                score: state.score + action.payload
            }))

            return { ...state, score: state.score + action.payload }

        case "SET_LOCAL_SCORE":
            return { ...state, score: action.payload }

        default:
            return state;
    }
}

export default user