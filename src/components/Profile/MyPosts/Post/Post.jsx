
import style from './Post.module.css'
const Post = (props) => {
    return (
        <div className={style.item}>
             <img className={style.item__photo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Jason_Statham_2007.jpg/150px-Jason_Statham_2007.jpg" alt="" />

            {props.message}
            <div><span>Like {props.likes}</span></div>
        </div>


    )
}

export default Post;