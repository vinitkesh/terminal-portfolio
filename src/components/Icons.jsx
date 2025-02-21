import React from 'react'

const BottomBarIcon = ({name}) => {
    const initials = name.split(' ').slice(0,2).map(element => {element[0].toUpperCase()}).join('');

    return (
        <div className='h-full w-max overflow-clip bg-red-700 '>
            {initials}
        </div>
    )
}

export default BottomBarIcon
