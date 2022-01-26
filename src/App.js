import {useState} from "react";


import './App.css';
import {Forms} from "./components/Forms";
import {Users} from "./components/Users";


function App() {

    const [keyWord,setKeyWord] = useState({name:'',userName:'',email:''})
    console.log(keyWord)

    const pressKeyWord = (word) => {
        setKeyWord(word)
    }

    return (
        <div className="App">
            <div className="forms">
                <Forms pressKeyWord={pressKeyWord} />
            </div>
            <div className="users">
                <Users keyWord={keyWord}/>
            </div>
        </div>
    );
}
export default App


