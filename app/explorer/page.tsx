import { PageComponent } from "@/components/pageComponent";
import { Header } from "@/components/ui/header";

export default function explorerPage(){
    return (
        <PageComponent>
            <Header border={true}>
                Explorer
            </Header>
            <h1>Hello explorer page</h1>
        </PageComponent>
    )
}