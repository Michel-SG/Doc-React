const initialState = {
    message: 'Click on the button to load people...',
    people: [],
    nextPage: 1,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SW_FETCH_SUCCEEDED': {
            const { data } = action;
            const count = state.people.length + data.people.length;
            return {
                message: `${count} / ${data.count} people...`,
                people: [...state.people, ...data.people],
                nextPage: data.nextPage,
            };
        }
        case 'SW_FETCH_FAILED':
            return { message: 'Failure !', people: [], nextPage: 1 };
        default:
            return state;
    }
}
