import style from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <li className={style.dialogs_list_item}><NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink></li>
    )
}
const Dialogs = () => {

    return (

        <div className={style.dialogs_wrapper}>
            <div className={style.dialogs}>
                <ul className={style.dialogs_list}>
                    <DialogItem name="Ivan" id="1"/>
                    <li className={style.dialogs_list_item}><NavLink to="/dialogs/2">Petr</NavLink></li>
                    <li className={style.dialogs_list_item}><NavLink to="/dialogs/3">Seregya</NavLink></li>
                    <li className={style.dialogs_list_item}><NavLink to="/dialogs/4">Nik</NavLink></li>
                    <li className={style.dialogs_list_item}><NavLink to="/dialogs/5">Jhon</NavLink></li>
                    <li className={style.dialogs_list_item}><NavLink to="/dialogs/6">Katya</NavLink></li>
                </ul>
            </div>
            <div className={style.messages_wrapper}>
                <div className={style.message}>Hi</div>
                <div className={style.message}>How is your it-kamasutra</div>
                <div className={style.message}>yo</div>
            </div>
        </div>

    )

}

export default Dialogs;