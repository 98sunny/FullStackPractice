import { VideoCard } from "./VideoCard"

export function VideoGrid(){
    const VIDEOS=[{
        title:"How to learn tailwind using Documentation",
        image:"freecodecamp.svg",
        thumbImage:"thumbnail1.jpg",
        author:"Freecodecamp",
        views:"100k",
        timeStamp:"2 days ago"
    },
    {
        title:"How to learn tailwind using videos",
        image:"freecodecamp.svg",
        thumbImage:"thumbnail2.jpg",
        author:"Freecodecamp",
        views:"100k",
        timeStamp:"2 days ago"
    },{
        title:"How to learn tailwind using Documentation",
        image:"freecodecamp.svg",
        thumbImage:"thumbnail3.jpg",
        author:"Freecodecamp",
        views:"100k",
        timeStamp:"2 days ago"
    },
    {
        title:"How to learn tailwind using videos",
        image:"freecodecamp.svg",
        thumbImage:"thumbnail4.jpg",
        author:"Freecodecamp",
        views:"100k",
        timeStamp:"2 days ago"
    },
    {
        title:"How to learn tailwind using videos",
        image:"freecodecamp.svg",
        thumbImage:"thumbnail1.jpg",
        author:"Freecodecamp",
        views:"100k",
        timeStamp:"2 days ago"
    },
    {
        title:"How to learn tailwind using videos",
        image:"freecodecamp.svg",
        thumbImage:"thumbnail2.jpg",
        author:"Freecodecamp",
        views:"100k",
        timeStamp:"2 days ago"
    }
]
return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {VIDEOS.map(video=><VideoCard 
        title={video.title} 
        image={video.image}
        thumbImage={video.thumbImage}
        author={video.author}
        views={video.views}
        timeStamp={video.timeStamp}/>
        
    )}
</div>
}


