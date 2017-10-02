import React, {Component, PureComponent} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'
import {findDOMNode} from 'react-dom'

class Article extends PureComponent {
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

    state = {
        clicked: 0
    }

    render() {
        const {article, isOpen, onButtonClick} = this.props

        if (this.state.clicked > 3) throw new Error('clicked more then 3 times')

        const body = isOpen && (
            <div>
                <section>{article.text}</section>
                <CommentList comments = {article.comments} ref = {this.setCommentsRef} key = {this.state.clicked}/>
            </div>
        )
        return (
            <div>
                <h2 ref = {this.setHeaderRef}>
                    {article.title}
                    <button onClick={onButtonClick}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                    <span onClick = {this.increment}>Clicked: {this.state.clicked} times</span>
                </h2>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }

    setHeaderRef = header => {
        this.header = header
//        console.log('---', this.header)
    }

    setCommentsRef = comments => {
        this.comments = comments
/*
        setTimeout(() => {
            this.comments.forceUpdate()
        }, 500)
*/
//        console.log('---', 'comments', comments, findDOMNode(comments))
    }

    increment = () => this.setState({
        clicked: this.state.clicked + 1
    })
}


export default Article