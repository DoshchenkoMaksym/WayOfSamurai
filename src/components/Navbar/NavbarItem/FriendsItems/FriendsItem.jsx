import style from './FriendsItem.module.css';
let FriendsItem = (props) => {
    return ( 
                <div className={style.friendsBox__item}>
                    <div >
                        <img className={style.friendsBox__itemPhoto} src={`${props.photo}`} alt="" />
                    </div>
                    <div>{props.name}</div>
                </div>
    )
}

export default FriendsItem;