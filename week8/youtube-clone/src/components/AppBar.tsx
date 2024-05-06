import { SearchBar } from "./SearchBar"

export const AppBar=()=>{
    return <div className="flex justify-between	pl-3 pr-3 pt-1 pb-2 bg-black">
    <div>
        <img src="/logo.jpg" className="h-auto h-15 w-10 rounded-xl m-2 pt-2" alt="YouTube" />
    </div>
    <div>
        <SearchBar />
    </div>
    <div className="text-gray-400 pt-3 border-none outline-none">
        Logout
    </div>
</div>



}