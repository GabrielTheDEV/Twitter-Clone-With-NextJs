"use client"
import { useState } from "react"

export function FollowButton(){
    const [ state, setState ] = useState('Follow')
    function handleClick() {
        if(state === 'Follow'){
            setState('Following')
        } else {
            setState('Follow')
        }
    }

    return <button 
            onClick={handleClick}
            className={`w-24 h-10 flex items-center justify-center rounded-full ${state === 'Following'? 'text-white bg-black' : 'text-blue-400 bg-white border border-blue-400' }`}
            >{state}</button>
}