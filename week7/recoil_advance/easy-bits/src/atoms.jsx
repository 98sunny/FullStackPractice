import { get } from "mongoose";
import { atom, selector } from "recoil";

export const networkAtom=atom({
    key: "networkAtom",
    default: 200
});
export const jobsAtom=atom({
    key: "jobsAtom",
    default: 0
});
export const messagingAtom=atom({
    key: "messagingAtom",
    default: 0
});
export const notificationsAtom=atom({
    key: "notificationsAtom",
    default: 0
});

export const sumOfNotificationSelector=selector({
    key:"sumOfNotificationSelector",
    get:({get})=>{
        const notificationSum=get(networkAtom)+get(jobsAtom)+get(messagingAtom)+get(notificationsAtom);
        return notificationSum;
    }
})