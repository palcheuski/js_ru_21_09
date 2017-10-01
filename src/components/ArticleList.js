import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './Article'

class ArticleList extends Component {
    render() {
        const { articles, openArticleId, handleToggle } = this.props

        if (!articles.length) {
            return <h3>No Articles</h3>
        }

        const articleElements = articles.map(
            (article) =>
                <li key={article.id}>
                    <Article article={article}
                        isOpen={article.id === openArticleId}
                        onButtonClick={() => handleToggle(article.id)}
                    />
                </li>);

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

ArticleList.defaultProps = {
    articles: []
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    handleToggle: PropTypes.func.isRequired,
    openArticleId: PropTypes.number
}

export default ArticleList