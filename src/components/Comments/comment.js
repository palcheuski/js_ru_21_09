import React from 'react'
import PropTypes from 'prop-types'

// component definition
let comment = (props) => {
    let {item:{user, text}} = props;

    return (
        <p>
            <b>{user}</b><br/>
            {text}
        </p>
    )
};

comment.propTypes = {
    item : PropTypes.shape({
        user: PropTypes.string,
        text: PropTypes.string
    }).isRequired
};


export default comment;