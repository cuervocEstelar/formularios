import ImageContent from "./components/Content/ImageContent"
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";

const isMobile = () => window.innerWidth <= 768;


const App = () => {
  return (

    <div className=" container ">
{/* <ImageContent /> */}

{isMobile() ? ( <MobileView/> ) : (<DesktopView/>)}



    </div>
  )
}

export default App