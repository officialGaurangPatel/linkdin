import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import InputOptions from './InputOptions'
import ImageIcon from '@material-ui/icons/Image'
import VideoIcon from '@material-ui/icons/VideoCall'
import EventIcon from '@material-ui/icons/Event'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import Post from './Post'
import { collection, getDocs, onSnapshot, addDoc, serverTimestamp, orderBy, query } from "firebase/firestore";
import { db } from './firebase'

const Feed = () => {

    const [post, setPosts] = useState([]);
    const [input, setInput] = useState('');

    const sendPost = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "posts"), {
                Name: "Gaurang",
                description: "Pooja",
                message: input,
                photoUrl: '',
                timeStamp: serverTimestamp()
            });
            setInput('');
            console.log("Document written with ID: ", docRef.id);
            console.log("Document written: ", docRef);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        // setPosts([..posts,])
        setInput('');
    }

    useEffect(() => {
        getData();
    }, [post])

    const getData = async () => {
        const collectionRef = collection(db, "posts")
        const q = query(collectionRef, orderBy("timeStamp", "desc"));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setPosts(querySnapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })))
        });

        return unsubscribe;
        // const querySnapshot = await getDocs(collection(db, "posts"));
        // console.log('posts: ', posts);
    }

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className='feed__input'>
                    <CreateIcon />
                    <form>
                        <input type="text" value={input} onChange={e => setInput(e.target.value)}  ></input>
                        <button type="submit" onClick={sendPost}>Send</button>
                    </form>
                </div>
                <div className='feed__inputOptions'>
                    <InputOptions Icon={ImageIcon} title='Photo' color='#70B5F9' />
                    <InputOptions Icon={VideoIcon} title='Video' color='#E7A33E' />
                    <InputOptions Icon={EventIcon} title='Event' color='#C0CBCD' />
                    <InputOptions Icon={CalendarViewDayIcon} title='Artical' color='#7FC15E' />
                </div>
            </div>
            {post.map(({ id, data: { name, description, message, photoUrl } }) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
        </div>
    )
}

export default Feed