import React from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'

// component definition
let commentList = (props) => {
    let { comments } = props;

    if (comments.length == 0) {
        return <i>No Comments to show</i>;
    }

    return (
        <section>
            {comments.map((comment) => <Comment key={comment.id} item={comment}></Comment>) }
        </section>
    )
};

// Specifies the default values for the props
commentList.defaultProps = {
    comments: []
}

// Turn on typechecking on the props
commentList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }))
};

export default commentList;

