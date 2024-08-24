import Link from "next/link";

interface LinkNavbarProps{
    name:string,
    route: string,
    svg: React.ReactNode
}

export function Link_NavBar({name , route , svg }: LinkNavbarProps){
    return(
        <Link href={route}>
            <div className='w-full flex justify-start items-center p-2 text-black cursor-pointer hover:bg-gray-100 '> 
                <div className='flex items-center justify-start text-xl font-normal py-4 px-2'>
                    <span>
                        {svg}
                    </span>
                </div>
                <div className='text-xl font-normal py-4 px-5'><span>{name}</span></div>
            </div>
        </Link>
    )
}