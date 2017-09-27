import React from 'react'

export default (props) => {
    let {comments} = props;
    return (
        <section>
          {comments.map(item => <p key={item.id}>{item.text}</p>)}
        </section>
    )
}