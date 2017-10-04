import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

// component definition
class addComment extends React.Component {
    constructor(props) {
        super(props);

        this.userInput = null;
        this.textInput = null;

        this.state = {
            userInputValid :true,
            textInputValid : true
        }
    }

    isFormValid(){
        var state = {
            userInputValid :true,
            textInputValid : true
        };

        if (this.textInput.value.length > 50 || this.textInput.value.length < 10){
           state.textInputValid = false;
        }

        if (!this.userInput.value.length){
            state.userInputValid = false;
        }

        this.setState(state);

        return state.userInputValid && state.textInputValid;
    }

    submitComment() {
        if (this.isFormValid()){
            // compose comment info
            var newComment = {
                id: new Date().getTime().toString(),
                user: this.userInput.value,
                text: this.textInput.value
            };

            // submit comment
            this.props.onSubmit(newComment);

            // clear textarea
            this.textInput.value = "";
            this.userInput.value = "";
        }
    }

    handleKeyUp(event) {
        // add comment on Shift+Enter
        if (event.shiftKey && event.keyCode === 13) {
            this.submitComment();
        }
    }


    handleClick = () => {
        this.submitComment();
    }

    render() {
        let { userPlaceholder, textPlaceholder, onSubmit } = this.props;
        return (
            <div>
                <input type="text" 
                    ref={this.setUserRef} 
                    placeholder={userPlaceholder} 
                    className={this.state.userInputValid ? '' : 'error-input'} />
                <br />
                <br />
                <textarea rows="5" cols="45"
                    ref={this.setTextRef} 
                    placeholder={textPlaceholder}
                    onKeyUp={this.handleKeyUp}  
                    className={this.state.textInputValid ? '' : 'error-input'} />
                <br />
                <br />
                <button onClick={this.handleClick}>
                    Submit
            </button>
            </div>
        )
    }

    setUserRef = input => {
        this.userInput = input;
    }

    setTextRef = input => {
        this.textInput = input;
    }
}

// Specifies the default values for the props
addComment.defaultProps = {
    userPlaceholder: 'Type user name',
    textPlaceholder: 'Type your comment and press Shift+Enter'
}

// Turn on typechecking on the props
addComment.propTypes = {
    textPlaceholder: PropTypes.string,
    userPlaceholder: PropTypes.string,
    onSubmit: PropTypes.func.isRequired
};

export default addComment