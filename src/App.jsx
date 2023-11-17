import CenterPost from "./components/centerpost/CenterPost"
import MobileNavbar from "./components/mobileNavbar/MobileNavbar"
import RightSidebar from "./components/rightsidebar/RightSidebar"
import MobileSidebar from "./components/sidebar/MobileSidebar"
import Sidebar from "./components/sidebar/Sidebar"
import useMediaQuery from "./hooks/useMediaQuery"



function App() {
  const isAboveMediumScreens = useMediaQuery("(min-width:765px)")

  return (
    <>
    {
      !isAboveMediumScreens && <MobileNavbar/>
    }
      <div className="homemaincontainer" >
        {
          
          isAboveMediumScreens ?
          <Sidebar/>
          :
          <MobileSidebar/>
        }
        <div></div>
        
        <CenterPost/>
        <RightSidebar/>
      </div>
    </>
  )
}

export default App
