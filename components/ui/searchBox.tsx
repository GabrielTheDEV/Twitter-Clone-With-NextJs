import { ClearIcon, SearchIcon } from "@/public/images/searchBox/searchBoxIcon";

export function SearchBox(){
    return(
        <div className="w-full h-10 flex items-center justify-center gap-3 px-3 rounded-full bg-gray-100">
            <div className="flex items-center text-gray-600 font-bold"> {/*iconSearch */}
                <SearchIcon/>
            </div>

            <input 
            type="text"
            placeholder="Search"
            className="w-full h-full bg-transparent outline-none"
            />

            <div className="text-blue-400">
                <ClearIcon/>
            </div> 
        </div>
    )
}

// .searchArea{
//     width: 85%; height: 70%;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 0 15px;
//     margin-top: 2px;
//     border-radius: 20px;
//     background-color: rgb(51, 51, 51);
// }
