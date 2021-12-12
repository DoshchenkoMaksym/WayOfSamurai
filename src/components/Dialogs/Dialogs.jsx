import style from './Dialogs.module.css'
import UserItem from './Users/UserItem';
import React from 'react';
import Message from './Messages/MessageItem';

const Dialogs = (props) => {
    
    let newMessage = React.createRef();

    function sendMessage() {
        props.addDialogItem()
    };

    function updateText() {
        let text = newMessage.current.value;
        props.newDialogsText(text)
    }

    let users = props.state.dialogsData
        .map(item => <UserItem name={item.name} id={item.id} />);

    let messages = props.state.messages
        .map(item => <Message message={item.message} />)
    return (

        <div className={style.dialogs_wrapper}>
            <div className={style.dialogs}>
                <ul className={style.dialogs_list}>
                    {users}
                </ul>
            </div>
            <div className={style.messages_wrapper}>
                <div className={style.message}>
                    {messages}
                </div>
                <div>
                    <textarea ref={newMessage} value={props.state.textInArea} onChange={updateText}></textarea>
                </div>
                <div>
                    <button onClick={sendMessage}>Send Message</button>
                </div>
            </div>

        </div>

    )

}

export default Dialogs;