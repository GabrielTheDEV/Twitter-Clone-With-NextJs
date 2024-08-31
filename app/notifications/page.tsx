import { PageComponent } from "@/components/pageComponent";
import { BackButton } from "@/components/ui/backButton";
import { Header } from "@/components/ui/header";

export default function NotificationPage(){
    return (
        <PageComponent>
            <Header border={true}>
                <div className="p-2">
                    <BackButton/>
                </div>
            </Header>
            <h1>Hello Notifications page</h1>
        </PageComponent>
    )
}