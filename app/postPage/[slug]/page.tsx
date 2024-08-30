import { PageComponent } from "@/components/pageComponent";
import { BackButton } from "@/components/ui/backButton";
import { Header } from "@/components/ui/header";

export default function PostPage({params}:{params:{slug:string}}){
    return(
        <PageComponent>
            <Header border={true}>
                <BackButton/>
            </Header>
            <div>{params.slug}</div>
        </PageComponent>
    )
}