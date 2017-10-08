import {
    INCREMENT,
    DELETE_ARTICLE,
    FILTER_SET_ARTICLES,
    FILTER_SET_DATES,
    FILTER_SET_USERNAME
} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }

    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function setUserFilter(user) {
    return {
        type: FILTER_SET_USERNAME,
        payload: user
    }
}

export function setDateRangeFilter(range){
    return {
        type: FILTER_SET_DATES,
        payload: range
    }
}

export function setSelectedArticlesFilter(articles){
    articles = articles || [];
    return {
        type: FILTER_SET_ARTICLES,
        payload: articles
    }
}