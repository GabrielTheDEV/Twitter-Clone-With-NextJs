
interface TrendingTopicsProps{
    trending ?:string
    title ?: string
    tags ?: string
}

interface AccountSuggestionsProps{
    account ?: string
}

export function TrendingTopics_BoxContent({trending , title , tags}: TrendingTopicsProps ): JSX.Element{
    return(
        <div className="w-full h-20 flex flex-col justify-center p-4 hover:bg-gray-100">
            <p className="text-sm">
                {trending}
            </p>
            <span className="text-base font-bold">
                {title}
            </span>
            <p className="text-xs">
                {tags}
            </p>
        </div>
    )
}

export function AccountSuggestions_BoxContent({account}: AccountSuggestionsProps ): JSX.Element{
    return(
        <div className="w-full h-20 flex flex-col justify-center p-4 hover:bg-gray-100">
            {account}
        </div>
    )
}