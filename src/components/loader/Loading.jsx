import React from 'react'

const Loading = () => {
    return (
        <div className='bg-lightModeBackground w-16 h-16 rounded-full shadow-lg m-auto mt-16 flex justify-center items-center'>
            <div className='bg-salmon loader rounded-full w-1/5 h-1/5 m-auto'></div>
        </div>
    )
}

export default Loading
