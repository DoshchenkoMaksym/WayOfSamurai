let store = {
    _state: {
        profilePage: {

            postsArr: [
                {
                    message: 'Hi',
                    likes: 3,
                    id: 1
                },
                {
                    message: 'gdsgfsdf',
                    likes: 25,
                    id: 2
                },
                {
                    message: 'Hjs cooli',
                    likes: 74,
                    id: 3
                },
                {
                    message: 'css cool',
                    likes: 13,
                    id: 4
                },
                {
                    message: 'Hi',
                    likes: 45,
                    id: 5
                },
            ],

            textInArea: '',

        },

        dialogsPage: {
            dialogsData: [
                { id: 1, name: 'Ivan' },
                { id: 2, name: 'Petr' },
                { id: 3, name: 'Seregya' },
                { id: 4, name: 'Nik' },
                { id: 5, name: 'Jhon' },
                { id: 6, name: 'Katya' },
            ],
            messages: [
                { id: 1, message: 'Hello' },
                { id: 2, message: 'How you doing?' },
                { id: 3, message: 'Fine thanks' },
                { id: 4, message: 'Ok' },
                { id: 5, message: 'I am learning JS' },
                { id: 6, message: 'That is great' },
            ],
            textInArea: '',
        },

        sideBar: {
            navPages: [
                {
                    id: 1,
                    title: 'Profile'
                },
                {
                    id: 2,
                    title: 'Dialogs'
                },
                {
                    id: 3,
                    title: 'News'
                },
                {
                    id: 4,
                    title: 'Music'
                },
                {
                    id: 5,
                    title: 'Settings'
                },
                {
                    id: 5,
                    title: 'Friends'
                }
            ],
            friendsPage: {
                users: [
                    {
                        id: 1,
                        name: 'Vova',
                        photo: 'https://aif-s3.aif.ru/images/006/640/97fae8c6c7529aea50fb0af617ad751a.jpg'
                    },
                    {
                        id: 2,
                        name: 'Petr',
                        photo: 'https://aif-s3.aif.ru/images/006/640/97fae8c6c7529aea50fb0af617ad751a.jpg'
                    },
                    {
                        id: 3,
                        name: 'Stas',
                        photo: 'https://aif-s3.aif.ru/images/006/640/97fae8c6c7529aea50fb0af617ad751a.jpg'
                    }
                ]

            }
        }
    },

    _rerenderEntireTree() {
        console.log('rerenderEntireTree')
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },

    addPost() {
        let newPost = {
            id: 1,
            message: this._state.profilePage.textInArea,
            likes: 0
        }
        this._state.profilePage.postsArr.push(newPost);
        this.newPostText('');
        this._rerenderEntireTree(this._state);
    },
    newPostText(newText) {
        this._state.profilePage.textInArea = newText;
        this._rerenderEntireTree(this._state);
    },
    addDialogItem() {
        let newDialogItem = {
            message: this._state.dialogsPage.textInArea
        };
        this._state.dialogsPage.messages.push(newDialogItem);
        this.newDialogsText('');
        this._rerenderEntireTree(this._state);
    },
    newDialogsText(newText) {
        this._state.dialogsPage.textInArea = newText;
        this._rerenderEntireTree(this._state);
    },
}




export default store;