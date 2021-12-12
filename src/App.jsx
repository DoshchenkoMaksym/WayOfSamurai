
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';



function App(props) {
  

  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.sideBar}/>
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/Profile' element={<Profile state={props.state.profilePage} addPost={props.addPost} newPostText={props.newPostText}/>} />
            <Route path='/Dialogs' element={<Dialogs state={props.state.dialogsPage} addDialogItem={props.addDialogItem} newDialogsText={props.newDialogsText}/>} />
            <Route path='/News' element={<News />} />
            <Route path='/Music' element={<Music />} />
            <Route path='/Settings' element={<Settings />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;
