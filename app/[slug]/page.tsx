import { PageComponent } from "@/components/pageComponent";
import { Avatar } from "@/components/ui/avatar";
import { FollowButton } from "@/components/ui/followButton";
import { Header } from "@/components/ui/header";

export default function userPage({params}:{params:{slug:string}}){
    return (
        <PageComponent>
            <Header>
                f
            </Header>
            <div className="w-full pb-2">
                <div className="w-full h-52 border-b bg-gray-200 "></div>

                <div className="absolute top-44 p-4 ">
                    <Avatar 
                    image="https://avatars.githubusercontent.com/u/152109789?v=4" 
                    width={'w-36'}
                    height={'h-36'}
                    />   
                </div>

                <div className="flex items-center justify-end gap-4 p-3 pr-8 ">
                    <button className="w-9 h-9 flex items-center justify-center rounded-full text-black border border-black">x</button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-full text-black  border border-black">x</button>
                    <FollowButton/>
                </div>

                <div className="m-4">
                    <div>
                        <span className="text-xl font-medium">{params.slug}</span>
                        <p className="text-gray-400">@Nickname</p>
                    </div>
                    <div className="mt-4 break-all">
                        <p>Hello , I'm Gabriel a FullStack Developer ! <br />This project was created with Next.Js</p>
                    </div>

                    <div className="flex items-center gap-6 mt-4">
                        <span>100 Following</span>
                        <span>100 Followers</span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className="w-full h-14 flex items-center border-b">
                <button className="w-full h-full hover:bg-gray-200">Posts</button>
                <button className="w-full h-full hover:bg-gray-200">Replies</button>
                <button className="w-full h-full hover:bg-gray-200">Highlights</button>
                <button className="w-full h-full hover:bg-gray-200">Mídia</button>
            </div>
        </PageComponent>
    )
}