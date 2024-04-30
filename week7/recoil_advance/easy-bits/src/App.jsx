import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue,useRecoilState } from 'recoil';
import { jobsAtom, networkAtom,messagingAtom,notificationsAtom,sumOfNotificationSelector } from './atoms';

function App() {
  

  return (
    <>
    <RecoilRoot>
    <MainApp></MainApp>
    </RecoilRoot>
      
    </>
  )
}
function MainApp(){
  const networkNotificationsValue = useRecoilValue(networkAtom);
  const jobsNotificationsValue = useRecoilValue(jobsAtom);
  const [messagingNotificationsValue,setMessagingNotificationsValue] = useRecoilState(messagingAtom);
  const notificationsValue = useRecoilValue(notificationsAtom);
  const sumOfNotifications=useRecoilValue(sumOfNotificationSelector);
  return <div>
  <button>Home</button>
    <button>My Network ({networkNotificationsValue>=100? "99+": networkNotificationsValue})</button>
    <button>Jobs ({jobsNotificationsValue})</button>
    <button onClick={()=>{
setMessagingNotificationsValue(messagingNotificationsValue+1);
}}>Messaging ({messagingNotificationsValue})</button>
    <button>Notifications ({notificationsValue})</button>
    <h2>{sumOfNotifications}</h2>
  </div>


}

export default App
