import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { login, logOut, selectUser } from './features/userSlice';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';

function App() {
  const dispatch = useDispatch();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL
        }));
      } else {
        dispatch(logOut());
      }
    })
  }, [])
  const { user: user } = useSelector(selectUser);
  console.log('user: ', user);
  return (
    <div className="app">
      <Header />
      {(!user) ? (<Login />) :
        (<div className='app__body'>
          <Sidebar />
          <Feed />
        </div>)
      }
    </div>
  );
}

export default App;
