import React from 'react'

export default (props) => {
    let { placeholder = "Type your comment and press Shift+Enter", onSumbit } = props;
    let textInput = null;

    function addComment() {
        if (textInput.value.length) {
            // compose comment info
            var newComment = {
                id: new Date().getTime().toString(),
                user: "Guest",
                text: textInput.value
            };

            // submit comment
            onSumbit(newComment);

            // clear textarea
            textInput.value = "";
        }
    }

    function handleKeyUp(event) {
        // add comment on Shift+Enter
        if (event.shiftKey && event.keyCode === 13) {
            addComment();
        }
    }

    function handleClick() {
        addComment();
    }

    return (
        <div>
            <textarea ref={input => textInput = input} placeholder={placeholder} onKeyUp={handleKeyUp} rows="5" cols="45"></textarea>
            <br />
            <button onClick={handleClick}>
                Submit
            </button>
        </div>
    )
}