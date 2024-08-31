import { PageComponent } from "@/components/pageComponent";
import { BackButton } from "@/components/ui/backButton";
import { Header } from "@/components/ui/header";

export default function PostPage({params}:{params:{slug:string}}){
    return(
        <PageComponent>
            <Header border={true}>
                <div className="flex items-center justify-center gap-2 p-2">
                <BackButton/>
                    <div>
                        <span className="text-xl font-medium">Post</span>
                    </div>
                </div>
            </Header>
            
            <div>{params.slug}</div>
        </PageComponent>
    )
}