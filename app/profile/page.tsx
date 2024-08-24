import { PageComponent } from "@/components/pageComponent";
import { Avatar } from "@/components/ui/avatar";

export default function userPage(){
    return (
        <PageComponent>
            <div className="w-full h-52 border-b bg-gray-200 "></div>

            <div className="absolute top-44 p-4 ">
                <Avatar 
                image="https://avatars.githubusercontent.com/u/152109789?v=4" 
                width={'w-36'}
                height={'h-36'}/>   
            </div>
            <div className="flex items-center justify-end gap-4 p-3 pr-8 ">
                <button className="w-9 h-9 border rounded-full text-white bg-black">x</button>
                <button className="w-9 h-9 border rounded-full text-white bg-black">x</button>
                <button className="w-20 h-9 border rounded-full text-white text-bold bg-black">Follow</button>
            </div>
            <div className="m-4">
            <div>
                <span className="text-xl font-medium">Nome do Usuario</span>
                <p className="text-gray-400">@Nickname</p>
            </div>
            <div className="mt-4 break-all">
                <p>20 bootstrapped Tools For Busy Founders. <br/>
                Sharing lessons on Startups & Growth.</p>
                
                
            </div>
                <div className="flex items-center  gap-6 mt-4">
                    <span>100 Following</span>
                    <span>100 Followers</span>
                    <span></span>
                </div>
            </div>
            
        </PageComponent>
    )
}