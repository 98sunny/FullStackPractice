import { get } from "mongoose";
import { atom, selector } from "recoil";
//need to pass in some keys to identify itself along with the default vaulue
// make sure that keys are unique for each atom
export const countAtom=atom({
    key:"countAtom",
    default: 0
});

export const evenSelector=selector({
    key:"evenSelector",
    // get is a function which has aargument which is a function which we use to get the value from countAtom
    get: ({get})=>{
        const count=get(countAtom);
        return count%2;
    }
})
// similar to
// export const even2Selector=selector({
//     key:"evenSelector",
//     // get is a function which has aargument which is a function which we use to get the value from countAtom
//     get: (props)=>{
//         const count=props.get(countAtom);
//         return count%2;
//     }
// })

