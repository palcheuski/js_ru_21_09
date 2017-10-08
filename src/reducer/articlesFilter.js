import { FILTER_SET_ARTICLES, FILTER_SET_DATES, FILTER_SET_USERNAME } from '../constants'

let defaultState = {
    user: '',
    dateRange: {
        from: null,
        to: null
    },
    selectedArticles: []
};

const articlesFilter = (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case FILTER_SET_DATES:
            return Object.assign({}, state, { dateRange: payload });
        case FILTER_SET_USERNAME:
            return Object.assign({}, state, { user: payload });
        case FILTER_SET_ARTICLES:
            return Object.assign({}, state, { selectedArticles: payload });
    }
    return state;
}

export default articlesFilter;