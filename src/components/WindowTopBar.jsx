import React from 'react'

const WindowTopBar = () => {
  return (
    <div className="rounded-t-md bg-white absolute top-0 left-0 h-5 z-20 w-full ">
        <div className="relative w-full h-full">
            <div className="w-3 h-3 m-1 bg-red-500 rounded-full right-1 origin-center absolute"></div>
            <div className="w-3 h-3 m-1 bg-blue-600 rounded-full right-5 origin-center absolute"></div>
        </div>
    </div>
  )
}

export default WindowTopBar
