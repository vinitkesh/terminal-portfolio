import BottomBarIcon from "./Icons"

const Bottombar = () => {
    return (
      <div className="w-full h-10 border-b flex justify-start bg-black bg-opacity-25 absolute bottom-0">
        <div className="relative w-full h-full flex justify-start">
            <div className=""></div>
            {/* <BottomBarIcon name="Terminal Hover" /> */}
            <div className="w-10 h-full border absolute right-0 bg-black bg-opacity-25">
            </div>
        </div>
      </div>
    )
  }
  
  export default Bottombar
  