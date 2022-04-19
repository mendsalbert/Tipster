import React from 'react';
import Login from './Login';
import Header from './Header';
import { useMoralis } from 'react-moralis';
import Message from './Message';

const MessageMain = () => {
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

export default MessageMain;