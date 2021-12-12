import { NavLink } from 'react-router-dom';
import style from './NavbarItem.module.css';
let NavbarItem = (props) => {
    return (
        <div className={style.item}>
                <NavLink to={`/${props.title}`}>{props.title}</NavLink>
        </div>
    )
};

export default NavbarItem;