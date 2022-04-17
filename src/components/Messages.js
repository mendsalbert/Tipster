import React from 'react';
import Login from './Login';
import Header from './Header';
import { useMoralis } from 'react-moralis';

const Messages = () => {
  const { isAuthenticated, logout}=useMoralis();

  if(!isAuthenticated){
    return <Login/>
  }

    return (
      <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-sky-800 overflow-hidden">
         <div className='="max-w-screen-2xl mx-auto'>
       <Header />
    
      </div>
      </div>
    );
}

export default Messages;