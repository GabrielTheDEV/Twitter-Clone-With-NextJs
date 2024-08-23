import { Header } from "../ui/header"

interface PageProps{
    children: React.ReactNode
}

export function PageComponent({children}: PageProps){
    return(
        <section className="w-full h-screen border-r">
            
            <Header border={true} >
                <p>alguma coisa</p>
            </Header>
            {children}
        </section>
    )
}
