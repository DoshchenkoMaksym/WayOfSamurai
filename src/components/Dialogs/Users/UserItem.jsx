import style from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';


const UserItem = (props) => {
    return (
        <li className={style.dialogs_list_item}><NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink></li>
    )
};

export default UserItem