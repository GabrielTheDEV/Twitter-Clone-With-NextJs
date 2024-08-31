import { PageComponent } from "@/components/pageComponent";
import { Header } from "@/components/ui/header";

export default function MessagePage(){
    return (
        <PageComponent>
            <Header border={true}>
                <div>
                    <span>Messages</span>
                </div>
            </Header>
            <h1>Hello Messages page</h1>
        </PageComponent>
    )
}