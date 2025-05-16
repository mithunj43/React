import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';
import { useState } from 'react';
import Modal from './Modal';

function PostsList() {
    const [enteredBody, setEnteredBody] = useState('');
    function changeBodyHandler(event) {
        setEnteredBody(event.target.value);
    }

    const [enteredAuthor, setEnteredAuthor] = useState('');
    function changeAuthorHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    const [modelIsVisible, setModelIsVisible] = useState(true);
    function hideModelHandler() {
        setModelIsVisible(false);
    }

    let modelContent;
    if (modelIsVisible) {
        modelContent = (
        <Modal onClose = {hideModelHandler}>
            <NewPost onBodyChange = {changeBodyHandler} onAuthorChange = {changeAuthorHandler}/>
        </Modal> ) ;
    } 
   return (
    <>
        {modelContent}
        <ul className={classes.posts}>
        <Post author = {enteredAuthor} body = {enteredBody}/>
        <Post author ="Pooja" body ="Check out the full course"/>
        </ul>
    </>
   ); 
}

export default PostsList;