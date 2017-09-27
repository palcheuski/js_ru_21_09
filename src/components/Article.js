import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CommentsToggleBox } from './Comments'

class Article extends Component {
    static defaultProps = {

    }

    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            date: PropTypes.string.isRequired
        }).isRequired,
        isOpen: PropTypes.bool,
        onClick: PropTypes.func
    }

    render() {
        const { article, isOpen, onButtonClick } = this.props
        let body = null;
        let comments = null;

        if (isOpen) {
            body = <section>{article.text}</section>
            comments = <CommentsToggleBox isCollapsed={true} comments={article.comments}></CommentsToggleBox>
        }

        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={onButtonClick}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
                {comments}               
            </div>
        )
    }
}


export default Article