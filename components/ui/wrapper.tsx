
interface WrapperChildren{
    children: React.ReactNode
}

export function Wrapper({children}: WrapperChildren){
    return(
        <div className="flex mx-72">
            {children}
        </div>
    )
}