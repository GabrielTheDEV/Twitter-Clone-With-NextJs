
interface BoxProps{
    title: string
    children: React.ReactNode
}

export function Box({title, children}: BoxProps):JSX.Element{
    return(
        <div className="w-full h-auto flex flex-col items-start my-2 border rounded-2xl" >
            <div className="w-full p-4">
                <span className="text-xl mb-4 font-bold">{title}</span>
            </div>
        

            <div className="w-full h-auto flex flex-col justify-center ">
                {children}
            </div>

            <div className="w-full p-3 rounded-b-xl hover:text-blue-500 hover:bg-gray-100">
                <span className="text-sm mb-4 ">Show more</span>
            </div>
        </div>
    )
}

