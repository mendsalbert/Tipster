import React from 'react'
import { useMoralis } from "react-moralis"

function ChangeUsername() {
    const{setUserData,isUserUpdating}=useMoralis();
    const setUsername=()=>{
        const username=prompt(`Enter your new username`);
        if(!username)return;
        setUserData({
            username,
        })
    }
    return (
        <div className="text-sm">
            <button disabled={isUserUpdating} 
            onClick={setUsername}
            className="bg-success text-white border-2 border-success">
                Change username
            </button>
        </div>
    )
}

export default ChangeUsername