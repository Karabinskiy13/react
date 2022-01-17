//import logo from './logo.svg';
import './App.css';
import {Posts} from './components/Posts'
import {Users} from "./components/Users";
import {Comments} from "./components/Comments";

export default function () {
    return (
        <div className="App">

            <div className="UserPosts">
                <div className="Users">
                    <Users/>
                </div>
                <div className="Posts">
                    <Posts/>
                </div>
            </div>
            <div className="Comments">
                <Comments/>
            </div>
        </div>
    );

}


