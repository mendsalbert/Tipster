import React from 'react';
import Login from './Login';
import { useMoralis } from 'react-moralis';
import Header from './Header';
import Message from './Message'

const GroupMain = () => {
    const { isAuthenticated, logout}=useMoralis();

    if(!isAuthenticated){
      return <Login/>
    }
  
    return (
      <div className="overflow-hidden">
         <div className='m-auto'>
       <Header />
       <Message />
      </div>
      </div>
    );
}

export default GroupMain;