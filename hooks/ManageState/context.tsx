"use client"
import React, { createContext, useContext, useState } from "react";

interface ContextType{
    tweets: TweetType[];
    setTweets: React.Dispatch<React.SetStateAction<TweetType[]>>;
}
interface TweetType{
    id: number
    content: string
}

const CONTEXT = createContext< ContextType | undefined>(undefined);


export function ContextProvider({children}: { children: React.ReactNode}){
    const [ tweets, setTweets ] = useState<TweetType[]>([{ id: 1, content:'Hello , I`m Gabriel a FullStack Developer'}]);

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