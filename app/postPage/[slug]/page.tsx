import { PageComponent } from "@/components/pageComponent";

export default function PostPage({params}:{params:{slug:string}}){
    return(
        <PageComponent>
            <div>{params.slug}</div>
        </PageComponent>
    )
}