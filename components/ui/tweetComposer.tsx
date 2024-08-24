"use client"
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { Avatar } from "./avatar";
import {TweetsContext } from "@/hooks/ManageState/context";

export function TweetComposer():JSX.Element {
    const {setTweets} = TweetsContext();
    const [ newTweet, setNewTweet ] = useState<string>('');

    const maxCharacters = 280;

    function handleTweetChange(e : ChangeEvent <HTMLTextAreaElement> ){
        let tweet = e.target.value;

        if(tweet.length <= maxCharacters){
            setNewTweet(tweet)
        }
    };

    function handleSubmit(e : FormEvent <HTMLFormElement> ){
        e.preventDefault();
        if(newTweet.trim()){
            setTweets(prev => [
                ...prev,{ id: 2, content: newTweet}
            ]);
            setNewTweet('')
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
                    value={newTweet}
                    onChange={handleTweetChange}
                    placeholder="What is happening?!"
                    className={`w-full border-b p-2 resize-none focus:outline-none h-${ newTweet.length <= 70 ? 18 
                    : newTweet.length <= 148 ? 24 : 36 } `}>
                </textarea>

                <div className="flex justify-between items-center mt-2">
                    
                    <span className={`text-sm ${newTweet.length === maxCharacters ? 'text-red-500': 'text-green-500'}`}> 
                       {`${ newTweet.length +'/'+ maxCharacters } ${newTweet.length >= maxCharacters ? ' -  Your tweet is over 280 characters' : ''}`}
                    </span>

                    <button
                    type="submit"
                    disabled={newTweet.length > maxCharacters || !newTweet.trim()}
                    className="bg-blue-500 text-white p-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
                    >Tweet</button>

                </div>
            </form>
        </div>
    )
};