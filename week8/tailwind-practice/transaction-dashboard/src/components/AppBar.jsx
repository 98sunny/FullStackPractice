import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";
import { SideButtons } from "./SideButtons";

export function AppBar(){
    return <div className="grid grid-cols-3 p-2 items-center gap-4 h-16 border-solid border-2">
        
        <Logo/>
        <SearchBar/>
        <SideButtons/>

        
        
        </div>
}