import {useState} from "react";

export const Forms = ({pressKeyWord}) => {

    const [filteredUsers, setFilteredUsers] = useState({name: '', userName: '', email: ''})



    function onSubmiter(e) {
        e.preventDefault()
        pressKeyWord({...filteredUsers})
    }

    function nameSetter(e, key) {
        let newFilteredUsers = {...filteredUsers, [key]: e.target.value}
        setFilteredUsers(newFilteredUsers)
    }

    return (
        <div>
            <form name='form' onSubmit={onSubmiter}>
                <label>Name: <input type="text" name='name' value={filteredUsers.name} onChange={(e) => nameSetter(e,'name')}/></label>
                <label>Username: <input type="text" name='username' value={filteredUsers.userName} onChange={(e) => nameSetter(e,'userName')}/></label>
                <label>Email: <input type="text" name='email' value={filteredUsers.email} onChange={(e) => nameSetter(e,'email')}/></label>
                <button>Check</button>
            </form>

        </div>
    );
};