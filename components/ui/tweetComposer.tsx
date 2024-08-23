"use client"
import { ChangeEvent, FormEvent, useState } from "react";

export function TweetComposer():JSX.Element {
    const [ tweet , setTweet ] = useState<string>('');
    const maxCharacters = 280;

    function handleTweetChange(e : ChangeEvent <HTMLTextAreaElement> ){
        let tweet = e.target.value;

        if(tweet.length <= maxCharacters){
            setTweet(tweet);
        }

    };

    function handleSubmit(e : FormEvent <HTMLFormElement> ){
        e.preventDefault();
        if(tweet.trim()){
            console.log('Tweet Enviado :', tweet)
            setTweet('')
        }
    };


    return(
        <div className="w-full gap-2 flex border-b p-4  ">
            <div className="">
                <p className="w-12 h-12 flex justify-center items-center border rounded-full">foto</p>
            </div>
            <form onSubmit={handleSubmit} className="w-full">
                <textarea
                    value={tweet}
                    onChange={handleTweetChange}
                    placeholder="What is happening?!"
                    className={`w-full border-b
                        h-${ tweet.length <= 70 ? 18 : tweet.length <= 148 ? 24 : 36 }
                        p-2 resize-none focus:outline-none`}
                ></textarea>
                <div className="flex justify-between items-center mt-2">

                    <span className={`text-sm ${tweet.length === maxCharacters ? 'text-red-500': 'text-green-500'}`
                    }> 
                       {`${ tweet.length +'/'+ maxCharacters } ${tweet.length >= maxCharacters ? ' -  Your tweet is over 280 characters' : ''}`}
                    </span>

                    <button
                    type="submit"
                    disabled={tweet.length > maxCharacters || !tweet.trim()}
                    className="bg-blue-500 text-white p-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
                    >Tweet</button>

                </div>
            </form>
        </div>
    )
};