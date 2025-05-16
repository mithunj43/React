import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';
import { useState } from 'react';
import Modal from './Modal';

function PostsList({isPosting, onStopPosting}) {
    const [enteredBody, setEnteredBody] = useState('');
    function changeBodyHandler(event) {
        setEnteredBody(event.target.value);
    }

    const [enteredAuthor, setEnteredAuthor] = useState('');
    function changeAuthorHandler(event) {
        setEnteredAuthor(event.target.value);
    }
   return (
    <>
        {isPosting && (
        <Modal onClose = {onStopPosting}>
            <NewPost onBodyChange = {changeBodyHandler} onAuthorChange = {changeAuthorHandler}/>
        </Modal> )}
        <ul className={classes.posts}>
        <Post author = {enteredAuthor} body = {enteredBody}/>
        <Post author ="Pooja" body ="Check out the full course"/>
        </ul>
    </>
   ); 
}

export default PostsList;