import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentsContainer from './CommentsContainer'

export default class CommentsToggleBox extends Component {
    constructor(props) {
        super(props);

        // initial state
        this.state = {
            isCollapsed: props.isCollapsed
        };
    }

    handleToggle = () => {
        this.setState(prevState => {
            return {
                isCollapsed: !prevState.isCollapsed
            }
        });
    }

    render() {
        const { title, comments } = this.props;
        const { isCollapsed } = this.state;

        let body = null;
        if (!isCollapsed) {
            body = <CommentsContainer comments={comments} />
        }

        return (
            <div>
                <h3>
                    {title}
                    <button onClick={this.handleToggle}>
                        {isCollapsed ? "show" : "hide"}
                    </button>
                </h3>
                {body}
            </div>
        );
    }
}

// Specifies the default values for the props
CommentsToggleBox.defaultProps = {
    title: 'Comments ',
    isCollapsed: true
}

// Turn on typechecking on the props
CommentsToggleBox.propTypes = {
    title: PropTypes.string,
    isCollapsed: PropTypes.bool,
    comments: PropTypes.array
};