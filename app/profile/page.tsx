import { PageComponent } from "@/components/pageComponent";
import { Avatar } from "@/components/ui/avatar";

export default function userPage(){
    return (
        <PageComponent>
            <div className="w-full h-52 border-b "></div>
            <div className="absolute top-44 left-81 p-4 ">
            <Avatar 
            image="https://avatars.githubusercontent.com/u/152109789?v=4" 
            width={'w-32'}
            height={'h-32'}/>
            </div>
            
        </PageComponent>
    )
}