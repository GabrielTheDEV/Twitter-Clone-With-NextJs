
interface AvatarProps{
    image ?: string
}

export function Avatar({image}: AvatarProps){
    return(
        <div className="w-12 h-12 flex justify-center items-center border rounded-full ">
            <img 
            src={image} 
            alt="avatar" 
            className="w-full h-full "
            />
        </div>
    )
}

