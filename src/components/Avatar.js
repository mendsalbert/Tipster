import React from 'react'
import { useMoralis } from "react-moralis"

function Avatar({username,logoutOnPress}) {
    const {user,logout}=useMoralis();
    return (
    <img
        src={`https://avatars.dicebear.com/api/pixel-art/${username || user.get("username")}.svg`}
        width='60'
        height='60'
        alt='alt'
        onClick={()=> logoutOnPress && logout()}
    />)
}

export default Avatar