import React, { useState } from 'react'

enum windowStateTypes {
    fullScreen,
    normal,
    minimised
}

enum currentTabTypes {
    experiences,
    projects,
    about
}

const getCurrentHeightClass = (windowState: windowStateTypes) => {
    switch (windowState) {
        case windowStateTypes.fullScreen:
            return 'h-screen'
        case windowStateTypes.normal:
            return 'h-full'
        case windowStateTypes.minimised:
            return 'h-full'
    }
}

const FileManager = () => {
    const [windowState, setWindowState] = useState<windowStateTypes>(windowStateTypes.normal)
    const [currentTab, setCurrentTab] = useState<currentTabTypes>(currentTabTypes.experiences)

  return (
    <div className={`flex flex-col justify-center items-center ${getCurrentHeightClass(windowState)} w-${windowState === windowStateTypes.fullScreen ? 'screen' : 'full'} ${windowState === windowStateTypes.fullScreen ? 'bg-gray-800' : 'bg-gray-600'} transition-all duration-300`}>
        <div className='left-side-bar'></div>
        <div className='content'></div>
    </div>
  )
}

export default FileManager