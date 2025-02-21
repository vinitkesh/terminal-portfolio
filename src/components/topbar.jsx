const Topbar = () => {
  const getCurrentTime = new Date().toLocaleTimeString();
  return (
    <div className="w-full h-6 bg-black bg-opacity-25 absolute top-0">
        <div className="time origin-center left-[50%] absolute top-0 h-min">
            <span className="text-white text-xs font-mono ">{getCurrentTime}</span>
        </div>
    </div>
  )
}

export default Topbar
