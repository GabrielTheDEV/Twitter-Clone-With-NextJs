import { Header } from "../ui/header"

export function SideBar(){
    return (
    <aside className="w-3/6 ml-4 border justify-center">
        <Header border={true}> <p>sidebar</p></Header>
        <h1>Hello Sidebar</h1>
    </aside>
    );
}