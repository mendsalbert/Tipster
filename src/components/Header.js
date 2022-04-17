import React from 'react'
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
    const {user}=useMoralis();
    return (
        <div className="container-fluid bg-dark mt-3">
            <div className="row">
                <div className="col">
                    <img
                    className='ml-2 mt-5'
                    width='100'
                    height='100'
                    src="/logo.png"
                    />
                </div>
                <div className="col" align='center'>
                <div className="mt-5 border-4 rounded-full">
                    <div><Avatar logoutOnPress/></div>
                </div>
                <h2 className="text-white font-bold">Welcome {user.getUsername()}</h2>
                </div>
                <div className="col mt-5" align='right'>
                <ChangeUsername/>
                </div>
            </div>
        </div>
    )
}

export default Header;