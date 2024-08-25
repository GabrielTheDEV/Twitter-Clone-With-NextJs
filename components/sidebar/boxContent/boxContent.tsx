import { FollowButton } from "@/components/ui/followButton"

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

export function AccountSuggestions_BoxContent(account: AccountSuggestionsProps ): JSX.Element{
    return(
        <div className="w-full h-20 flex items-center justify-between p-4 hover:bg-gray-100">
            <div className="h-full flex items-center gap-4">
                <div className="border p-4">
                    <img src="" alt="" />
                </div>
                <span>Nome do usuario</span>
            </div>
            

            <FollowButton/>
        </div>
    )
}