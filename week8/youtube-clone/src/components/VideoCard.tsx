export function VideoCard(props: any){
    return <div className="p-3 cursor-pointer">
       <img className="rounded-xl" src={props.thumbImage} alt="image"></img>
       <div className="grid grid-cols-12 pt-5">
        <div className="col-span-1"><img className={"rounded-full w-14 h-14"} src={props.image} alt="image"></img>
        </div>
        <div className="col-span-11 pl-2 ">
            <div>{props.title}</div>
            <div className="col-span-11 text-gray-400 text-base">
            {props.author}
        </div>
        <div className="col-span-11 text-gray-400 text-base">
            {props.views} | {props.timeStamp} 
        </div>
        </div>
        
       </div>

        
    </div>
}