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
        {posts.length > 0 &&
            (<ul className={classes.posts}>
                {posts.map((post) => <Post key = {post.body}
                author = {post.author} body = {post.body}/>)}
            </ul>
        )}
        {posts.length === 0  && (
            <div style={{textAlign: 'center', color: 'white'}}>
                <h2> There are no posts yet.</h2>
                <p> Start by adding one!</p>
            </div>
        )}
    </>
   ); 
}

export default PostsList;