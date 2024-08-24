
interface HeaderChild{
    children: React.ReactNode,
    border ?: boolean
}

export function Header({children, border}: HeaderChild){
    return(
        <div className={`w-full h-14 flex items-center justify-center text-center ${ border === true && 'border-b'}`}>
            {children}
        </div>
    )
}