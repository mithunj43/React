import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';
import { useState } from 'react';
import Modal from './Modal';

function PostsList({isPosting, onStopPosting}) {
    const [posts, setPosts] = useState([]);
    function addPostHandler(postData) {
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

   return (
    <>
        {isPosting && (
        <Modal onClose = {onStopPosting}>
            <NewPost onAddPost = {addPostHandler}
             onCancel = {onStopPosting}/>
        </Modal> )}
        <ul className={classes.posts}>
        <Post author ="Pooja" body ="Check out the full course"/>
        </ul>
    </>
   ); 
}

export default PostsList;