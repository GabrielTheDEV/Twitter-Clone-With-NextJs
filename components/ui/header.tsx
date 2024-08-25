
interface HeaderChild{
    children: React.ReactNode,
    border ?: boolean
    justify ?: string
}

export function Header({children, border , justify }: HeaderChild){
    return(
        <div className={`w-full h-14 flex items-center ${justify}  text-center ${ border === true && 'border-b'}`}>
            {children}
        </div>
    )
}