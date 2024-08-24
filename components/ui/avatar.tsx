
interface AvatarProps{
    image ?: string
}

export function Avatar({image}: AvatarProps){
    return(
        <div className="w-12 h-12 flex justify-center items-center border rounded-full overflow-hidden hover:border-blue-400">
            <img 
            src={image} 
            alt="avatar" 
            className="w-full h-full object-cover"
            />
        </div>
    )
}

