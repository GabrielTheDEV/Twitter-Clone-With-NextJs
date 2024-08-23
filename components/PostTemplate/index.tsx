import { Link_Icon, Reply_Icon, Repost_Icon, Save_Icon } from "@/public/images/postTemplate/PostTemplate"


interface PostProps{
    tweet: string
}

export function PostTemplate({tweet}: PostProps):JSX.Element{
    return(
        <div className="w-full h-full flex gap-2 p-4 pb-1 border-b hover:bg-gray-100">
            <div className="w-12 h-12 flex justify-center items-center border rounded-full"><p>foto</p></div>

            <div className="w-full flex flex-col justify-center mt-1 mr-2"> 
                <div className="flex items-center gap-2">
                    <span className="text-lg text-black font-medium">Nome do Usuario</span>
                    <span className="text-gray-400">@Nickname</span>
                    <span className="text-gray-400">- há 1 min</span>
                </div>

                <div className="my-2">
                    <p className="text-base">{tweet}</p>
                </div>

                <div className="w-full flex justify-between py-2 mt-2 ">
                    <button><Link_Icon/></button>
                    <button><Reply_Icon/></button>
                    <button><Repost_Icon/></button>
                    <button><Save_Icon/></button>
                </div>
            </div>
        </div>
    )
};