
import style from './navbar.module.css';
import NavbarItem from './NavbarItem/NavbarItem';
import FriendsItem from './NavbarItem/FriendsItems/FriendsItem';
const Navbar = (props) => {
    let navData = props.state.navPages.map(item => <NavbarItem title={item.title} />);
    let navFriends = props.state.friendsPage.users.map(item => <FriendsItem name={item.name} photo={item.photo} />);
    return (
        <nav className={style.nav}>
            {navData}
            <div className={style.friendsBox}>
                {navFriends}
            </div>
        </nav>
    )
}

export default Navbar;