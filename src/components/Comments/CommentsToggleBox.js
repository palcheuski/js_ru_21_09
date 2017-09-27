import React, { Component } from 'react'
import CommentsContainer from './CommentsContainer'

export default class CommentsToggleBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isCollapsed: props.isCollapsed || true
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
        const { title = "Comments", comments } = this.props;
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