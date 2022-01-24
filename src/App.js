import './App.css';
import {useState} from "react";
import {Users} from "./components/Users";
import {UserDetails} from "./components/UserDetails";
import {UserPosts} from "./components/UserPosts";


const App = () => {
    const [userId, setUserId] = useState(null)
    const getDetails = (id) => {
        setUserId(id)
    }
    const [postId, setPostId] = useState(null)
    const getPosts = (id) => {
        setPostId(id)
    }

    return (<div className='App'>
            <div className='User'>
                <div className='Users'>
                    <Users getDetails={getDetails}/>
                </div>
                <div className='info'>
                    <UserDetails userId={userId} getPosts={getPosts}/>
                </div>
                <div className='post'>
                    <UserPosts postId={postId}/>
                </div>
            </div>
        </div>
    );
};

export default App;