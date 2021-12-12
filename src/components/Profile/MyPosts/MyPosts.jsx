
import style from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => {
    let messageForRender = props.posts.postsArr.map(post => <Post message={post.message} likes={post.likes}/>)
    return (
        <div className={style.posts}>
             My post
            <div>New Post</div>
            {messageForRender}

           
        </div>

    )
}

export default MyPosts;