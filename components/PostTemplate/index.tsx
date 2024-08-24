import { Link_Icon, Reply_Icon, Repost_Icon, Save_Icon } from "@/public/images/postTemplate/PostTemplate"
import { Avatar } from "../ui/avatar"


interface PostProps{
    tweet: string
    image?: string
}

export function PostTemplate({tweet, image}: PostProps):JSX.Element{
    
    return(
        <div className="w-full h-full flex gap-2 p-3 pb-1 border-b hover:bg-gray-100">
            <div>
                <Avatar 
                image="https://avatars.githubusercontent.com/u/152109789?v=4"
                width={'w-12'}
                height={'w-12'}
                />
            </div>

            <div className="w-full flex flex-col justify-center mt-1 mr-2"> 
                <div className="flex items-center gap-2">
                    <span className="text-lg text-black font-medium hover:underline  cursor-pointer">Nome do Usuario</span>
                    <span className="text-gray-400">@Nickname</span>
                    <span className="text-gray-400">- há 2 dias</span>
                </div>

                <div className="flex flex-col gap-2 my-2">
                    <p className="text-base text-light break-all whitespace-pre-wrap">{tweet}</p>
                    <img 
                    src={image} 
                    alt={image && 'images'}
                    className="w-full h-auto border rounded-2xl"
                    />
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