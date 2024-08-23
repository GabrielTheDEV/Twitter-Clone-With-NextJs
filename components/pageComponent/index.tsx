
interface PageProps{
    children: React.ReactNode
}

export function PageComponent({children}: PageProps){
    return(
        <section className="w-full h-screen">
            
            {children}
        </section>
    )
}
