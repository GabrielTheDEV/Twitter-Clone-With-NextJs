import { Header } from "../ui/header"

interface PageProps{
    children: React.ReactNode
}

export function PageComponent({children}: PageProps):JSX.Element {
    return(
        <section className="w-full h-screen border-r overflow-y-scroll">
            {children}
        </section>
    )
}
