import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordion from './Accordion'
import { connect } from 'react-redux'

class ArticleList extends Accordion {
    state = {
        error: null
    }

    render() {
        const { articles } = this.props
        if (this.state.error) return <h2>Error: {this.state.error.message}</h2>
        if (!articles.length) return <h3>No Articles</h3>

        const articleElements = articles.map((article) => <li key={article.id}>
            <Article article={article}
                isOpen={article.id === this.state.openItemId}
                onButtonClick={this.toggleOpenItemMemoized(article.id)}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    componentDidCatch(error, info) {
        console.log('---', 123, error, info)
        this.setState({ error })
    }
}


ArticleList.defaultProps = {
    articles: []
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}


const getVisibleArticles = (articles, filter) => {
    return articles.filter(article => {
        // filter by user in comments if needed
        // if (!!filter.user && filter.user.length){
        //     article
        // }

        // filter by date, where article date should be between daterange.from and daterange.to
        if (!!filter.dateRange) {
            let date = new Date(article.date);
            if (!!filter.dateRange.from && filter.dateRange.from > date)
                return false;
            if (!!filter.dateRange.to && filter.dateRange.to < date)
                return false;
        }

        if (!!filter.selectedArticles && filter.selectedArticles.length) {
            let item = filter.selectedArticles.find(option => {
                return option.value === article.id;
            });
            if (!item)
                return false;
        }

        return true;
    });
};

export default connect((state) => ({
    articles: getVisibleArticles(state.articles, state.articlesFilter)
}))(ArticleList)