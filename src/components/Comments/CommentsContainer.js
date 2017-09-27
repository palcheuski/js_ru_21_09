import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentList from './commentList'
import AddComment from './addComment'

export default class CommentsContainer extends Component {
    constructor(props) {
        super(props);

        // initial state
        this.state = {
            comments: props.comments
        };
    }

    handleSubmitComment = (newComment)=> {

        // TODO : Уточнить этот момент
        // Сейчас, если придерживаться рекомендаций и использовать подход с чистыми функциями (pure function) при работе с состоянием, 
        // то при создании нового массива из имеющегося и добавлении в него нового элемента - это приводит к рассинхронизации  
        // внутреннего состояни компонента с объектом статьи.
        // 
        // Как результат, после сворачивания/разворачивании статьи в компонент приходит старый неизмененный массив комментариев и мы не видем то, что добавляли ранее.
        // 
        // Хотелось бы узнать как решать такую проблему в отсутствии центрального хранилища типа Redux. 
         

        // Код рабочий, но имеет проблемы описанные выше
        // this.setState(prevState=>{
        //     let updatedComments = prevState.comments.slice();
        //     updatedComments.push(newComment);
        //     return {
        //         comments: updatedComments
        //     }
        // });

         this.setState(prevState=>{
             var updatedComments = prevState.comments;
             updatedComments.push(newComment);
            return {
                comments: updatedComments
            }
        });
    };

    render() {
        const { comments } = this.state;
        return (
            <div>
                <CommentList comments={comments}></CommentList>
                <hr/>
                <AddComment onSumbit={this.handleSubmitComment} />
            </div>
        );
    }
}

// Turn on typechecking on the props
CommentsContainer.propTypes = {
    comments: PropTypes.array
};