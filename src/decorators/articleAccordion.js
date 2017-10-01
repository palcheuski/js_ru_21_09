import React from 'react'

export default (OriginalComponent) =>
    class DecoratedComponent extends React.Component {

        state = {
            openArticleId: null
        }

        handleToggle = (articleId) => {
            this.setState(prevState => {
                return {
                    openArticleId: prevState.openArticleId === articleId ? null : articleId
                }
            });
        }

        render() {
            return <OriginalComponent {...this.props} openArticleId={this.state.openArticleId} handleToggle={this.handleToggle} />
        }
    }