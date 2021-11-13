import p from './MyPosts.module.css'
import Post from './Post/Post';
const MyPosts = () => {
    return (
        <div className={p.posts}>
             My post
            <div>New Post</div>
           <Post message='Hello world' likes='15'/>
           <Post message='Hi, my name is Vova'likes='20'/>
           
        </div>

    )
}

export default MyPosts;