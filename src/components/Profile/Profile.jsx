import MyPosts from './MyPosts/MyPosts';
import style from './profile.module.css';
import React from 'react';




const Profile = (props) => {
    let newPostElem = React.createRef();

    function addPostToState() {
        props.dispatch({type: 'ADD-POST'})
    };
    function updateTextInState() {
        
        let text = newPostElem.current.value;
        props.dispatch({type: 'NEW-POST-TEXT', newText: text});
    }
    return (
        <div className={style.content}>

            <div>
                <img className={style.content__image} src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg" alt="" />
            </div>
            <div className={style.content__info}>
                <div>Hello world</div>
                <div>
                    <textarea className="content__textarea" ref={newPostElem} value={props.state.textInArea} onChange={updateTextInState} />
                </div>

                <div>
                    <button onClick={addPostToState}>Add post</button>
                </div>
            </div>
            <MyPosts posts={props.state} />
        </div>
    )
}

export default Profile;