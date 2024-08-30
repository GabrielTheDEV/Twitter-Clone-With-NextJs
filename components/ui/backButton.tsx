'use client';

import { ArrowLeft } from "@/public/images/arrow/arrow";
import { useRouter } from "next/navigation";


export function BackButton(){
    const router = useRouter();
    return(
        <button 
        onClick={() => router.back() }
        className="flex items-center justify-center font-bold p-2 rounded-full hover:bg-gray-100">
            <ArrowLeft/>
        </button>
    )
}