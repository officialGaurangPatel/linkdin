import React, { useState } from 'react'
import './Login.css'
import { login } from './features/userSlice'
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth"
import { useDispatch } from 'react-redux'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('');
    const [profilepic, setProfilepic] = useState('');
    const dispatch = useDispatch();

    const auth = getAuth();
    const register = () => {

        if (!name) {
            alert('Please enter your name')
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                console.log('userAuth: ', userAuth);
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: profilepic
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoURL: profilepic
                        }))
                    })
            }).catch((e) => {
                alert(e.message)
            })
    }

    const loginUser = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoURL: userAuth.user.photoURL
                })
                )
            }).catch((e) => {
                alert(e.message)
            })
    }

    return (
        <div className="login">
            <img src="https://www.technipages.com/wp-content/uploads/2020/09/LinkedIn-Does-Not-Load-Images-fix.jpg" alt="" />

            <form>
                <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder='Full name [required if registering]' />

                <input value={profilepic} onChange={(e) => { setProfilepic(e.target.value) }}
                    type="text" placeholder='Profile Picture URL [optional]' />

                <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder='Email' />

                <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='Password' />

                <button type="submit" onClick={loginUser}>Sign Up</button>

            </form>
            <p>Not a member? <span className='login__register' onClick={register}>Register Now</span></p>
        </div>
    )
}

export default Login