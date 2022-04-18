import React from 'react';
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";

function Messag({ messag }) {
  const { user } = useMoralis();
  const isUserMessage = messag.get("ethAddress") === user.get("ethAddress");
  return (
    <div
      className={`flex items-end ${
        isUserMessage && "justify-end"
      }`}
    >
        <div
        className={`flex p-3 ml-5 text-white shadow rounded-lg ${
          isUserMessage
            ? "rounded-br-none bg-success"
            : "rounded-bl-none bg-dark"
        }`}
      >
        <p>{messag.get("message")}</p>
      </div>

      <div className={`h-8 w-8 ${isUserMessage && "order-last"}`}>
        <Avatar username={messag.get("username")} />
      </div>
      <p
        className={`ml-2 ${
          isUserMessage ? "text-dark" : "text-danger"
        }`}
      >
        {messag.get("username")}
      </p>
      
      
    </div>
  );
}

export default Messag;