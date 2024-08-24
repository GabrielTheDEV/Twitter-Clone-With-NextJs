"use client"
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { Avatar } from "./avatar";
import {TweetsContext } from "@/hooks/ManageState/context";

export function TweetComposer():JSX.Element {
    const [ tweets, setTweets ] = useState<string>('');
    // const {tweets , setTweets} = TweetsContext();
    // const { tweets , setTweets} = useContext(MyContext)


    const maxCharacters = 280;

    function handleTweetChange(e : ChangeEvent <HTMLTextAreaElement> ){
        let tweets = e.target.value;

        if(tweets.length <= maxCharacters){
            setTweets(tweets);
        }

    };

    function handleSubmit(e : FormEvent <HTMLFormElement> ){
        e.preventDefault();
        if(tweets.trim()){
            console.log('Tweet Enviado :', tweets);
            setTweets('')
        }
    };


    return(
        <div className="w-full gap-2 flex border-b p-4  ">
            <div className="">
                {/* <p className="w-12 h-12 flex justify-center items-center border rounded-full">foto</p> */}
                <Avatar image="https://avatars.githubusercontent.com/u/152109789?v=4"/>
            </div>
            <form onSubmit={handleSubmit} className="w-full">
                <textarea
                    value={tweets}
                    onChange={handleTweetChange}
                    placeholder="What is happening?!"
                    className={`w-full border-b
                        h-${ tweets.length <= 70 ? 18 : tweets.length <= 148 ? 24 : 36 }
                        p-2 resize-none focus:outline-none`}
                ></textarea>
                <div className="flex justify-between items-center mt-2">

                    <span className={`text-sm ${tweets.length === maxCharacters ? 'text-red-500': 'text-green-500'}`
                    }> 
                       {`${ tweets.length +'/'+ maxCharacters } ${tweets.length >= maxCharacters ? ' -  Your tweet is over 280 characters' : ''}`}
                    </span>

                    <button
                    type="submit"
                    disabled={tweets.length > maxCharacters || !tweets.trim()}
                    className="bg-blue-500 text-white p-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
                    >Tweet</button>

                </div>
            </form>
        </div>
    )
};