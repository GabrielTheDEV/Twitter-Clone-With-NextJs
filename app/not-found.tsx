import { PageComponent } from "@/components/pageComponent"
import { Header } from "@/components/ui/header"
import Link from "next/link"

export default function NotFound(){
    return(
        <PageComponent>
            <Header border={true}>
                d
            </Header>
            <div className="w-full h-1/2 flex flex-col items-center justify-center">
                <h1 className="text-5xl font-medium text-blue-400">404</h1>
                <span className="text-2xl font-medium text-gray-400">Ops, página não encontrada &#58;&#40;</span>
                <button className="my-2 hover:underline hover:text-blue-400 "><Link href="/">Ir para a página principal</Link></button>
            </div>
        </PageComponent>
    )
}