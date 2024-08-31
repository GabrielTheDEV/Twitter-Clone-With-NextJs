import { PageComponent } from "@/components/pageComponent";
import { BackButton } from "@/components/ui/backButton";
import { Header } from "@/components/ui/header";

export default function ListsPage(){
    return (
        <PageComponent>
            <Header border={true}>
                <div className="p-2">
                    <BackButton/>
                </div>
            </Header>
            <h1>Hello Lists page</h1>
        </PageComponent>
    )
}