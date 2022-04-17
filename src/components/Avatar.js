import React from 'react'
import { useMoralis } from "react-moralis"

function Avatar({username,logoutOnPress}) {
    const {user,logout}=useMoralis();
    return (
    <img
        className="rounded-full bg-black cursor-pointer hover:opacity-75"
        src={`https://avatars.dicebear.com/api/pixel-art/${username || user.get("username")}.svg`}
        width='100'
        height='100'
        onClick={()=> logoutOnPress && logout()}
    />)
}

export default Avatar