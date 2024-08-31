import { PageComponent } from "@/components/pageComponent";
import { Header } from "@/components/ui/header";
import { SearchBox } from "@/components/ui/searchBox";

export default function explorerPage(){
    return (
        <PageComponent>
            <Header border={true}>
                <div className="w-full px-6">
                    <SearchBox/>
                </div>
                
            </Header>
            <h1>Hello explorer page</h1>
        </PageComponent>
    )
}