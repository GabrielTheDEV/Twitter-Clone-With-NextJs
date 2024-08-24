
interface AvatarProps{
    image ?: string
    width: string
    height: string
}

export function Avatar({image, width, height}: AvatarProps){
    return(
        <div className={`${width} ${height} flex justify-center items-center border rounded-full overflow-hidden hover:border-blue-400`}>
            <img 
            src={image} 
            alt="avatar" 
            className="w-full h-full object-cover"
            />
        </div>
    )
}

