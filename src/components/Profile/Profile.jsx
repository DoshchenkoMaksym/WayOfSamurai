import MyPosts from './MyPosts/MyPosts';
import p from './profile.module.css';
const Profile = () => {
    return (
        <div className={p.content}>
           
            <div>
                <img className="content__img" src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg" alt="" />
            </div>
            <div>https://thumbs.dreamstime.com/z/very-cute-female-orangutan-portrait-female-orangutan-portrait-123378951.jpg</div>
            <MyPosts />
        </div>
        
    )
}

export default Profile;