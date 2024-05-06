export function BlueCard(){
    return <div className="bg-sky-700 text-zinc-50 rounded ml-4">
    <div className="flex flex-start rounded p-4">
            <p className="text-sm">Next Payout</p>
            <div className="pl-3 place-content-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
</svg></div>
    </div>

    <div>
    <div className="flex justify-between p-4">
    <p className="text-lg">$ 2,312.23</p>
    <div className="flex justify-start items-center">
    <p> 23 Orders</p>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
    
    </div>
    
    </div>
    

    </div>
    <div className="bg-sky-800 text-zinc-50 flex justify-between p-3 rounded">
    <p> Next payout date:</p>
    <p> Today, 04:00 PM</p>

    </div>
    </div>
}