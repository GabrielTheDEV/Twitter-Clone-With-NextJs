"use client"
import React, { createContext, useContext, useState } from "react";

interface ContextType{
    tweets: string;
    setTweets: React.Dispatch<React.SetStateAction<string>>;
}
const CONTEXT = createContext< ContextType | undefined>(undefined);


export function ContextProvider({children}: { children: React.ReactNode}){
    const [ tweets, setTweets ] = useState<string>('o');

    return(
        <CONTEXT.Provider value={{tweets , setTweets}}>
            {children}
        </CONTEXT.Provider>
    )
};

export function TweetsContext(){
    const context = useContext(CONTEXT)
    if(!context){
        throw new Error('mensagem!!')
    }
    return(context)    
}