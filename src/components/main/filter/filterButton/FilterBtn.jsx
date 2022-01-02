import React from 'react'
import Icon from '../../../images/Icon'

const FilterBtn = ({ filterIsOpen, setFilterIsOpen }) => {
     // function to show filter drop-down
     const openFilterDropDown = () => {
        if(filterIsOpen) {
            setFilterIsOpen(false)
        }else{
            setFilterIsOpen(true)
        }
    }
    return (
        <div>
            <div className='flex items-center bg-white p-4 justify-end rounded-lg shadow-xl cursor-pointer' onClick={openFilterDropDown}>
                <div className='font-semibold'>Filter by Region</div>
                <div>{filterIsOpen ? <Icon svg={[<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down ml-7" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg>]}/> : <Icon svg={[<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up ml-7" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
</svg>]}/>}</div>
            </div>
        </div>
    )
}

export default FilterBtn
